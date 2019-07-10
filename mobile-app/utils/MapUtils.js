import Supercluster from "supercluster";

function getZoomLevel(longitudeDelta) {
    const angle = longitudeDelta;
    return Math.round(Math.log(360 / angle) / Math.LN2);
}

export function getCluster(places, region) {
    const cluster = new Supercluster({
        radius: 100,
        maxZoom: 16,
        map: (props) => {
            return {
                id: props.id,
                title: props.title,
            }
        },
        reduce: (clusterProps, pointProps) => {
            //FIXME potential error on SuperCluster library
                if(!clusterProps.data){
                    clusterProps.data = [];
                }
            clusterProps.data.push(pointProps) 
        }
    });
    let markers = [];
    try {
        const padding = 0;
        cluster.load(places);
        markers = cluster.getClusters(
            [
                region.longitude - region.longitudeDelta * (0.5 + padding),
                region.latitude - region.latitudeDelta * (0.5 + padding),
                region.longitude + region.longitudeDelta * (0.5 + padding),
                region.latitude + region.latitudeDelta * (0.5 + padding)
            ],
            getZoomLevel(region.longitudeDelta)
        );
    } catch (e) {
        //TODO manage error
        // console.debug("failed to create cluster", e);
    }
    return {
        markers,
        cluster
    };
}