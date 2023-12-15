import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'


export default function Experiments() {

    /* Some inspiration taken from https://natureofcode.com/book/chapter-8-fractals/ */

    useEffect(() => {


      function fractal(){
        return {
            width: 0,
            height: 0,
            line_length: 20,
            reduction_factor: 0.618034,
            angle_input: 0.2,
            center: "bottom",
            system: 'FF[+F-F-F][-F+F+F]',
            getAngle() {
                return this.angle_input * Math.PI;
            },
            init() {
                var canvas = document.getElementById("canvas");
                var container = document.getElementById("canvas-container");
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;

                this.width = canvas.width;
                this.height = canvas.height;

                var line_length_input = document.getElementById("length");
                line_length_input.max = this.height / 2;

                this.draw();
            },
            draw(){
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext('2d');
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if(this.system.length > 1){
                    var LSystem = this.getSystemGeneration(this.system);

                    ctx.strokeStyle = "rgb(255,255,255)";

                    ctx.save();
                    if(this.center == "center"){
                        ctx.translate(this.width/2, this.height/2);
                    }else if(this.center == "bottom"){
                        ctx.translate(this.width/2, this.height);
                    }else {
                        ctx.translate(this.width/2, 0);
                    }
                    ctx.beginPath();
                    this.drawLSystem(ctx,LSystem,this.line_length,this.getAngle());
                    ctx.stroke();
                    ctx.restore();
                }
            },
            getSystemGeneration(system){
                var generated = system;
                //ensure the little fella grows.
                var initialLength = system.length;
                while(generated.length < 5000){
                    generated = generated.replace(/F/g, system);
                    if(initialLength == generated.length){
                        //aint nothin to see here.
                        break;
                    }
                }
                return generated;
            },
            drawLSystem(ctx, system, length, angle){
                for(var i = 0; i < system.length; i++){
                    switch(system.charAt(i)){
                        case 'F':
                            ctx.moveTo(0,0);
                            ctx.lineTo(0, -length);
                            ctx.translate(0, -length);
                            break;
                        case 'G':
                            ctx.translate(0, -length);
                            break;
                        case '+':
                            ctx.rotate(angle);
                            break;
                        case '-':
                            ctx.rotate(-angle);
                            break;
                        case '[':
                            length = length * this.reduction_factor;
                            ctx.save();
                            break;
                        case ']':
                            ctx.restore();
                            length = length / this.reduction_factor ;
                            break;
                    }
                }
            }
        }
      }

      window.generator = fractal();
      window.generator.init();

      window.onresize = function() { window.generator.init() }

      
    });

    return (
        <div> 
          <Container className="text-light mb-5">
            <h3 className='text-center mt-5'>
              Fractals are Fun
            </h3>
            <p className='text-center mb-5'>This janky thing demonstrates one way to generate them.</p>
            <p>A fractal is a type of shape that has parts resembling the whole (often called &quot;self-similarity&quot;). Many natural objects (trees, clouds, mountains, waves) can be very successfully conceived of as fractals.</p>
            <p>Ignoring scale, a tree&apos;s branches will exhibit similar characteristics as the whole tree itself &ndash; each branch looks like a tree. If you were to describe how to draw a tree, then, it would be recursive. You&apos;d need to say &quot;draw a smaller tree here&quot; at some point in that description, and maybe set limits as to how many times you can say that (since there are limits to how small you can draw).</p>
            <p>That&apos;s the intuition behind L-Systems. L-Systems are simply a specification for drawing fractal patterns. Here is one example:</p>
            <p><b>FF[+F-F-F][-F+F+F]</b></p>
            <p>L-Systems produce self-similar fractals by:</p>
            <ol>
              <li>Replace every instance of <b>F</b> with the entire text of the L-system. This is the new L-System.</li>
              <li>Repeat step 1 until a desired level of detail is reached.</li>
              <li>Process the result by performing actions based on the characters.</li>
            </ol>
            <p>Here are the valid characters, representing actions for the L-System:</p>
            <ul>
              <li><b>F</b>: Draw a line forward.</li>
              <li><b>G</b>: Move forward without drawing.</li>
              <li><b>+</b>: Rotate clockwise.</li>
              <li><b>-</b>: Rotate counterclockwise.</li>
              <li><b>[</b>: Save Context (e.g. Rotations and Position.). This generator also shortens the draw length at this step.</li>
              <li><b>]</b>: Restore Context (e.g. Rotations and Position.). This generator also lengthens the draw length at this step.</li>
            </ul>
            <p>Try adjusting the settings below to get a feel for how this works.</p>

            
            <div className="bg-dark p-5 mt-5 shadow-lg rounded-4 mb-4">
              <h5 className='text-center'>Fractal Generator Settings</h5>
              <div className="w-25 border-top border-3 mx-auto mb-4 border-secondary rounded-1"></div>
              <Row className='mb-3 '>
                <Col xs={12} lg={4} >
                  <label htmlFor="lsystem" className="form-label">L-System Specification</label>
                  <input type="text" defaultValue="FF[+F-F-F][-F+F+F]" className='form-control' pattern="[FG\+\-\[\]]*" onChange={(evt) => {generator.system = evt.target.value;generator.draw()}}></input>
                </Col>
                <Col xs={12} lg={4} >
                  <label htmlFor="angle" className="form-label">Rotation Angle</label>
                  <input defaultValue={0.2} id="angle" type="range" min="0" max="1" step=".025" className='form-range' onChange={(evt) => {generator.angle_input = evt.target.value;generator.draw()}} />

                </Col>
                <Col xs={12} lg={4} >
                  <label htmlFor="length" className="form-label">Line Length</label>
                  <input defaultValue={20} id="length" type="range" min="1" max="150" step="1" className='form-range' onChange={(evt) => {generator.line_length = evt.target.value;generator.draw()}} />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={4}>
                  <label htmlFor='start' className='form-label'>Start Position</label>
                  <select defaultValue={'bottom'} id="start" className='form-select' onChange={(evt) => {generator.center = evt.target.value;generator.draw()}} > 
                    <option value="top">Top Middle</option>
                    <option value="center">Center</option>
                    <option value="bottom">Bottom Middle</option>
                  </select>
                </Col>

              </Row>
            </div>

            <div className="bg-dark shadow-lg rounded-4 mb-4 border border-secondary ">
              <div id='canvas-container' style={{position: 'relative',width: '100%',paddingBottom: '56.25%'}}>
                <canvas className='bg-dark w-100 h-100 rounded-4' id="canvas" style={{position: 'absolute'}}>
                    <p className='text-danger'>Uh Oh. Something did not work. <br/>Your browser might not support this canvas.</p>
                </canvas>
              </div>
            </div>

          </Container>
  
        </div>
    )
  }
  
  Experiments.getLayout = function getLayout(page) {
    return (
      <GlobalLayout title={'Web Experiments - Fractals | Murph'} description={'The best website ever.'}>
        {page}
      </GlobalLayout>
    )
  }