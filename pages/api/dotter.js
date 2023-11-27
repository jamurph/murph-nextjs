import { Graphviz } from '@hpcc-js/wasm';

// This function initializes Graphviz - it should be called only once
// and the result should be cached for subsequent requests.
let graphvizInstance;
async function getGraphviz() {
    if (!graphvizInstance) {
        graphvizInstance = await Graphviz.load();
    }
    return graphvizInstance;
}

export default async function handler(req, res) {
    // Extract the DOT graph from the URL query string
    const { dot } = req.query;

    // Check if the dot parameter is provided
    if (!dot) {
        res.status(400).json({ error: 'No DOT graph provided' });
        return;
    }

    try {
        // Decode the DOT graph
        const decodedDot = decodeURIComponent(dot);

        // Get the initialized graphviz instance
        const gv = await getGraphviz();

        // Use the layout method to generate the graph image
        const svg = await gv.dot(decodedDot);

        // Set the Content-Type header to image/svg+xml
        res.setHeader('Content-Type', 'image/svg+xml');

        // Send the SVG image as the response
        res.send(svg);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error.message });
    }
}