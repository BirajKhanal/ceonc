export const dynamicGraph = (graphWidth) => {
    let widthUpdate = 600
    if (graphWidth < 1000) {
        return graphWidth*.98
    }
    if (graphWidth < 1580) {
        return graphWidth*.7
    }
    return widthUpdate
}