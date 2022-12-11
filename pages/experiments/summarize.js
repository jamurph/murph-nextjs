import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import styles from '../../styles/scss/pages/experiments/graph.module.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faFlask } from '@fortawesome/free-solid-svg-icons'

export default function Graph() {

    let descartes = `Some years ago I was struck by how many false things I had believed, and by how doubtful was the structure of beliefs that I had based on them. I realized that if I wanted to establish anything in the sciences that was stable and likely to last, I needed - just once in my life - to demolish everything completely and start again from the foundations. It looked like an enormous task, and I decided to wait until I was old enough to be sure that there was nothing to be gained from putting it off any longer. I have now delayed it for so long that I have no excuse for going on planning to do it rather than getting to work. So today I have set all my worries aside and arranged for myself a clear stretch of free time. I am here quite alone, and at last I will devote myself, sincerely and without holding back, to demolishing my opinions.

I can do this without showing that all my beliefs are false, which is probably more than I could ever manage. My reason tells me that as well as withholding assent from propositions that are obviously false, I should also withhold it from ones that are not completely certain and indubitable. So all I need, for the purpose of rejecting all my opinions, is to find in each of them at least some reason for doubt. I can do this without going through them one by one, which would take forever: once the foundations of a building have been undermined, the rest collapses of its own accord; so I will go straight for the basic principles on which all my former beliefs rested.

Whatever I have accepted until now as most true has come to me through my senses. But occasionally I have found that they have deceived me, and it is unwise to trust completely those who have deceived us even once.

Yet although the senses sometimes deceive us about objects that are very small or distant, that doesn't apply to my belief that I am here, sitting by the fire, wearing a winter dressing-gown, holding this piece of paper in my hands, and so on. It seems to be quite impossible to doubt beliefs like these, which come from the senses.

Another example: how can I doubt that these hands or this whole body are mine? To doubt such things I would have to liken myself to brain-damaged madmen who are convinced they are kings when really they are paupers, or say they are dressed in purple when they are naked, or that they are pumpkins, or made of glass. Such people are insane, and I would be thought equally mad if I modelled myself on them.

What a brilliant piece of reasoning! As if I were not a man who sleeps at night and often has all the same experiences while asleep as madmen do when awake - indeed sometimes even more improbable ones. Often in my dreams I am convinced of just such familiar events - that I am sitting by the fire in my dressing-gown - when in fact I am lying undressed in bed! Yet right now my eyes are certainly wide open when I look at this piece of paper; I shake my head and it isn't asleep; when I rub one hand against the other, I do it deliberately and know what I am doing. This wouldn't all happen with such clarity to someone asleep.

Indeed! As if I didn't remember other occasions when I have been tricked by exactly similar thoughts while asleep! As I think about this more carefully, I realize that there is never any reliable way of distinguishing being awake from being asleep.

This discovery makes me feel dizzy, which itself reinforces the notion that I may be asleep! Suppose then that I am dreaming - it isn't true that I, with my eyes open, am moving my head and stretching out my hands. Suppose, indeed that I don't even have hands or any body at all.

Still, it has to be admitted that the visions that come in sleep are like paintings: they must have been made as copies of real things; so at least these general kinds of things - eyes, head, hands and the body as a whole - must be real and not imaginary. For even when painters try to depict sirens and satyrs with the most extraordinary bodies, they simply jumble up the limbs of different kinds of real animals, rather than inventing natures that are entirely new. If they do succeed in thinking up something completely fictitious and unreal - not remotely like anything ever seen before - at least the colours used in the picture must be real. Similarly, although these general kinds of things - eyes, head, hands and so on - could be imaginary, there is no denying that certain even simpler and more universal kinds of things are real. These are the elements out of which we make all our mental images of things - the true and also the false ones.

These simpler and more universal kinds include body, and extension; the shape of extended things; their quantity, size and number; the places things can be in, the time through which they can last, and so on.

So it seems reasonable to conclude that physics, astronomy, medicine, and all other sciences dealing with things that have complex structures are doubtful; while arithmetic, geometry and other studies of the simplest and most general things - whether they really exist in nature or not - contain something certain and indubitable. For whether I am awake or asleep, two plus three makes five, and a square has only four sides. It seems impossible to suspect that such obvious truths might be false.

However, I have for many years been sure that there is an all-powerful God who made me to be the sort of creature that I am. How do I know that he hasn't brought it about that there is no earth, no sky, nothing that takes up space, no shape, no size, no place, while making sure that all these things appear to me to exist? Anyway, I sometimes think that others go wrong even when they think they have the most perfect knowledge; so how do I know that I myself don't go wrong every time I add two and three or count the sides of a square? Well, you might say·, God would not let me be deceived like that, because he is said to be supremely good. But, I reply, if God's goodness would stop him from letting me be deceived all the time, you would expect it to stop him from allowing me to be deceived even occasionally; yet clearly I sometimes am deceived.

Some people would deny the existence of such a powerful God rather than believe that everything else is uncertain. Let us grant them - for purposes of argument - that there is no God, and theology is fiction. On their view, then, I am a product of fate or chance or a long chain of causes and effects. But the less powerful they make my original cause, the more likely it is that I am so imperfect as to be deceived all the time - because deception and error seem to be imperfections. Having no answer to these arguments, I am driven back to the position that doubts can properly be raised about any of my former beliefs. I don't reach this conclusion in a flippant or casual manner, but on the basis of powerful and well thought-out reasons. So in future, if I want to discover any certainty, I must withhold my assent from these former beliefs just as carefully as I withhold it from obvious falsehoods.

It isn't enough merely to have noticed this, though; I must make an effort to remember it. My old familiar opinions keep coming back, and against my will they capture my belief. It is as though they had a right to a place in my belief-system as a result of long occupation and the law of custom. It is true that these habitual opinions of mine are highly probable; although they are in a sense doubtful, as I have shown, it is more reasonable to believe than to deny them. But if I go on viewing them in that light I shall never get out of the habit of confidently assenting to them. To conquer that habit, therefore, I had better switch right around and pretend (for a while) that these former opinions of mine are utterly false and imaginary. I shall do this until I have something to counter-balance the weight of old opinion, and the distorting influence of habit no longer prevents me from judging correctly. However far I go in my distrustful attitude, no actual harm will come of it, because my project won't affect how I act, but only how I go about acquiring knowledge.

So I shall suppose that some malicious, powerful, cunning demon has done all he can to deceive me - rather than this being done by God, who is supremely good and the source of truth. I shall think that the sky, the air, the earth, colours, shapes, sounds and all external things are merely dreams that the demon has contrived as traps for my judgment. I shall consider myself as having no hands or eyes, or flesh, or blood or senses, but as having falsely believed that I had all these things. I shall stubbornly persist in this train of thought; and even if I can't learn any truth, I shall at least do what I can do, which is to be on my guard against accepting any falsehoods, so that the deceiver - however powerful and cunning he may be - will be unable to affect me in the slightest. This will be hard work, though, and a kind of laziness pulls me back into my old ways.

Like a prisoner who dreams that he is free, starts to suspect that it is merely a dream, and wants to go on dreaming rather than waking up, so I am content to slide back into my old opinions; I fear being shaken out of them because I am afraid that my peaceful sleep may be followed by hard labour when I wake, and that I shall have to struggle not in the light but in the imprisoning darkness of the problems I have raised.
    `


    async function processText(){
        //remove previous output.
        const output = document.getElementById('outputText');
        output.innerHTML = '';

        //add loading text  + disable the button
        const button = document.getElementById('process-btn');
        button.classList.add('disabled');
        const sentence = document.createElement('p');
        sentence.classList.add('text-center');
        const text = document.createTextNode('Loading...');
        sentence.appendChild(text);
        output.appendChild(sentence);


        const inputText = document.getElementById('intext').value;
        const numExtract = document.getElementById('numExtract').value;
        const response = await fetch("/api/summarize", {
          method: 'POST',
          body: JSON.stringify({inputText: inputText, numExtract: numExtract}),
          headers: {'Content-Type': 'application/json'}
        })
        const result = await response.json()
        //clear Loading...
        output.innerHTML = '';
        if(result.summary && result.summary.extractive && result.summary.extractive.length > 0){
          
          for(let i = 0; i < result.summary.extractive.length; i++){
      
            const sentence = document.createElement('p');
            const text = document.createTextNode(result.summary.extractive[i]);
            sentence.appendChild(text);
            output.appendChild(sentence);
          }
        }else {
            const sentence = document.createElement('p');
            sentence.classList.add('text-center');
            const text = document.createTextNode('Summary could not be computed.');
            sentence.appendChild(text);
            output.appendChild(sentence);
        }
        button.classList.remove('disabled');
    }


    return (
        <div> 
          <Container className="text-light">
            <h3 className='text-center mt-5'>
              Text Summarizer
            </h3>
            <p className='text-center mb-5'>What? You expect me to read the whole thing?</p>
            <p>This page uses an extractive text algorithm to pull out sentences from an article that it sees as contributing the most to the overall meaning.</p>
            <p>I would not use it for anything serious &ndash; it is just a fun toy. The library used is a Javascript library, and Javascript is not the language of choice for any Natural Language tasks (which would be python).</p>
            <p>The default text is an excerpt from Descartes&apos; <em>Meditations</em>.</p>

            <div className="bg-dark p-5 mt-5 shadow-lg rounded-4 mb-4">
                <h5 className='text-center'>Input</h5>
                <div className="w-25 border-top border-3 mx-auto mb-4 border-secondary rounded-1"></div>
                <textarea defaultValue={descartes} className='form-control mb-3' id='intext' name="intext" rows='5'></textarea>

                <label htmlFor="numExtract" className="form-label">Number of sentences to extract (leave blank for dynamic)</label>
                <input defaultValue={7} id="numExtract" type="number" min="1" max="20" step="1" className='form-control' style={{maxWidth: '100px'}}></input>
                <div className='text-center my-3'>
                    <button id='process-btn' onClick={processText} type='button' className="btn btn-secondary">Process Text <FontAwesomeIcon className='text-light' icon={faFlask} /></button>
                </div>
                <h5 className='text-center mt-3'>Output</h5>
                <div className="w-25 border-top border-3 mx-auto mb-4 border-secondary rounded-1"></div>
                <div id='outputText'>
                </div>
            </div>
            
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