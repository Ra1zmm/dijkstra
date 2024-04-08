function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
        queue.push(vertex);
    }

    while (queue.length) {
        let current = queue.reduce((minVertex, vertex) => distances[vertex] < distances[minVertex] ? vertex : minVertex, queue[0]);

        queue.splice(queue.indexOf(current), 1);
        visited[current] = true;

        for (let neighbor in graph[current]) {
            if (!visited[neighbor]) {
                let distance = distances[current] + graph[current][neighbor];
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                }
            }
        }
    }

    return distances;
}