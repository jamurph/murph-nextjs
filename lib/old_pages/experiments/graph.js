import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import styles from '../../styles/scss/pages/experiments/graph.module.scss'




export default function Graph() {


    useEffect(function() {
      
      var cytoscape;
      var fcose;
      var cxtMenus;

      const load = async () => {
        cytoscape = (await import('cytoscape')).default;
        fcose = (await import('cytoscape-fcose')).default;
        await import('cytoscape-context-menus/cytoscape-context-menus.css');
        cxtMenus = (await import('cytoscape-context-menus')).default;

        cytoscape.warnings(false);
  
        cytoscape.use( cxtMenus );
        cytoscape.use( fcose ); 

        var cy = cytoscape({
            
            container: document.getElementById('cyto-div'), // container to render in
            
            elements: {
              
                nodes: [
                  {
                    data: { id: 'jacob', type:'user', label: 'Jacob' }
                  },
            
                  {
                    data: { id: 'william', type:'user', label:'William' }
                  },

                  {
                    data: { id: 'rene', type:'user', label:'Rene' }
                  },

                  {
                    data: { id: 'john', type:'user', label:'John' }
                  },

                  {
                    data: { id: 'acme', type:'company', label:'Acme Corp' }
                  },

                  {
                    data: { id: 'bus', type:'company', label:'John Doe LLC' }
                  }
                  ,

                  {
                    data: { id: 'murphy', type:'company', label:'Murphy Management' }
                  }


                ],
                edges: [
                  {
                    data: { id: 'wj', source: 'william', target: 'jacob' }
                  },
                  {
                    data: { id: 'rj', source: 'rene', target: 'jacob' }
                  },
                  {
                    data: { id: 'acmewilliam', source: 'acme', target: 'william' }
                  },
                  {
                    data: { id: 'busjohn', source: 'bus', target: 'john' }
                  },
                  {
                    data: { id: 'johnjacob', source: 'john', target: 'jacob' }
                  }
                  ,
                  {
                    data: { id: 'murphyrene', source: 'murphy', target: 'rene' }
                  }
                ]
            },
            
            style: [ // the stylesheet for the graph
                
                {
                    selector: 'node[type = "user"]',
                    style: {
                        'background-color': '#8E9182',
                        'label': 'data(label)',
                        'width': '150px',
                        'padding' : '10px',
                        'shape' : 'round-rectangle',
                    }
                },
                {
                    selector: 'node[type = "company"]',
                    style: {
                        'background-color': '#A36952',
                        'label': 'data(label)',
                        'width': '150px',
                        'padding' : '10px',
                        'shape' : 'round-rectangle',
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ffffff',
                        'target-arrow-color': '#ffffff',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                },
                {
                    selector: 'node[label]',
                    style: {
                        'text-halign': 'center',
                        'text-valign': 'center',
                        'text-wrap' : 'wrap',
                        'text-max-width': '150px',
                        'text-justification': 'left',
                        'color': '#ffffff'
                    }
                }
            ],
            layout: {
                name:'fcose',
                quality: "proof",
                randomize: true, 
                animate: true,
                animationDuration: 1000,
                fit: true, 
                padding: 30,
                nodeDimensionsIncludeLabels: true,
                uniformNodeDimensions: false,
                nodeSeparation: 100,
                nodeRepulsion: 4579,
                idealEdgeLength: 71, 
                edgeElasticity: 0.7,
                nestingFactor: 0.1,
                numIter: 25000,
            },
            wheelSensitivity: 0.25,
            maxZoom: 2.5,
            minZoom: 0.1,
        });


        /* init */

        cy.contextMenus({
          menuItems : [
            {
              id: 'color',
              content: 'Change Color',
              tooltipText: 'change color',
              selector: 'node',
              hasTrailingDivider: true,
              submenu: [
                {
                  id: 'color-blue',
                  content: 'blue',
                  tooltipText: 'blue',
                  onClickFunction: function (event) {
                    let target = event.target || event.cyTarget;
                    target.style('background-color', 'blue');
                  },
                  submenu: [
                    {
                      id: 'color-light-blue',
                      content: 'light blue',
                      tooltipText: 'light blue',
                      onClickFunction: function (event) {
                        let target = event.target || event.cyTarget;
                        target.style('background-color', 'lightblue');
                      },
                    },
                    {
                      id: 'color-dark-blue',
                      content: 'dark blue',
                      tooltipText: 'dark blue',
                      onClickFunction: function (event) {
                        let target = event.target || event.cyTarget;
                        target.style('background-color', 'darkblue');
                      },
                    },
                  ],
                },
                {
                  id: 'color-green',
                  content: 'green',
                  tooltipText: 'green',
                  onClickFunction: function (event) {
                    let target = event.target || event.cyTarget;
                    target.style('background-color', 'green');
                  },
                },
                {
                  id: 'color-red',
                  content: 'red',
                  tooltipText: 'red',
                  onClickFunction: function (event) {
                    let target = event.target || event.cyTarget;
                    target.style('background-color', 'red');
                  },
                },
              ]
            }
          ],
          submenuIndicator : {
            content:'<i class="fas fa-arrow-right"></i>'
          }
        });

      }

      load();
    });

    return (
        <div> 
          <Container className="text-light">
            <h3 className='text-center mt-5'>
              Graphs are the Future.
            </h3>
            <p className='text-center mb-5'>More like the whiteboard than the excel sheet.</p>

            <p>{`A graph is a data structure composed of nodes and edges which represent objects and relationships, respectively. It is the "circles and lines" data structure that people instinctively use all the time on whiteboards without knowing it as a "graph".`}</p>
            <p>{`Graphs make highly connected data more easily digestible for both computers and humans. While graphs have made a decent foray into the database world (and I believe they will continue to make progress there), I would love to see graphs used more often in software on the front-end. I think specifically database administrative tasks and planning tasks (dependency graphs) could be made more fluid with graph-based UX.`}</p>
            <p>{`The below is a toy example of a graph in a front-end. Nodes can be dragged around, clicked, right-clicked for context menus, etc. The only point I want to make with this is that graph-based front-end puts users closer to the data and promotes a deeper understanding of relationships captured by the data.`}</p>

            <div className={`${styles.graphBox} shadow-lg rounded-4 mb-5 border-secondary border`} id='cyto-div'></div>
          </Container>
  
        </div>
    )
  }
  
  Graph.getLayout = function getLayout(page) {
    return (
      <GlobalLayout title={'Web Experiments - Graph | Murph'} description={'The best website ever.'}>
        {page}
      </GlobalLayout>
    )
  }