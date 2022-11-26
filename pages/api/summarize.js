import summarize from 'text-summarization'

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const {inputText, numExtract} = req.body
    if(typeof inputText == 'string' && inputText.length > 1){
      let parsedNum = parseInt(numExtract);
      let summary;
      if(isNaN(parsedNum)){
        summary = await summarize({text: inputText})
      }else {
        summary = await summarize({text: inputText, numSentences: numExtract})
      }
      res.status(200).json({summary: summary})
    } else{
      res.status(200).json({summary: inputText})
    }
  }else {
    res.status(405)
  }
}
