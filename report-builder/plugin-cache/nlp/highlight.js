const { template } = require("lodash")
const tokenize = require("./tokenize")

let defaultHtmlTemplate = '<span class="entity-tag-<%= tag %>"><%= entity %></span>'

let wrapEntity = (data, t ) => {
	data.match = data.entity
    return template(t)(data)
} 


const splitString = ( text, pattern ) => {
    let left = ""
    let right = text
    
    // console.log(left, " >---> ", right)
    

    if(!right) return ""
    
    for (let index = 0; (right && !right.startsWith(pattern));  ){
        
        // console.log(left, "|---|", right)
        
        left += right.substring(0, 1)
        right = right.substr(1, right.length)
    }

    // if(right.startsWith(pattern)){
        return {
            left,
            pattern,
            right: right.substring(pattern.length),
            founded: right.startsWith(pattern)
        }
    // } else {
    //     return left
    // }

} 

let highlight = ( { text, locale, entities, template } ) => {
    
    // console.log("Highlight: ", text )//, locale, entities)

    locale      = locale    || "en"
    template    = template  || defaultHtmlTemplate
    entities    = entities  || []
    
    
    let serie = []
    let pos = 0
    let splitting = text
    try {
        entities.forEach( e => {
            // console.log(" >>>>>>>>>>>>> ",e)
            // console.log(splitting, "splitting")

            splitting = splitString(splitting, e.entity)
            
            // console.log(splitting)

            if(splitting.founded){
                serie.push(splitting.left)
                serie.push(wrapEntity(e, template))
                splitting = splitting.right
                // console.log(JSON.stringify(splitting))
            } 
            else {
                splitting = splitting.left
                // return
                // serie.push(splitting)
                // 
            }
        })
    } catch (e) {
        console.log("ERROR")
        console.log(e.toString())
        console.log(text)
        console.log(entities)
        throw e
    }    
    
    serie.push(splitting)
    // console.log(serie.join("").split("\n").map( d => `<p>${d}</p>`).join("\n"))
    return serie.join("").split("\n").map( d => `<p>${d}</p>`).join("\n")    

}


module.exports = highlight							    



// let data = {
//   "_id": {
//     "$oid": "6532d67b05c9f13660713bb6"
//   },
//   "schedule": {
//     "id": "633eae59-6f24-4378-89de-841549898242",
//     "version": "1.0.1",
//     "source": "abd000c9-7089-42fe-bf74-92d179d69d5a",
//     "name": "UNIAN_WEB_UK",
//     "activatedAt": "2023-10-20T19:18:00.012Z"
//   },
//   "scraper": {
//     "message": {
//        text: `Bulgaria took part in the World Culture Festival, held between September 29 and October 1 in Washington.Some 230 Bulgarian dancers from different parts of the US, as well as mummers (Bulgarian: kukeri), dancers, and bagpipers from Bulgaria, participated in the event, Bulgaria’s Embassy in Washington said on Monday.Among the participants were the musical ensembles Zherava, based in Washington; Vereya, Horo, and Gaidari, based in Chicago; and Ludo Mlado, based in Boston.The music for the performance was written by composer Georgi Andreev. Bulgarian singer Desi Dobreva also performed at the festival. The main organizer of Bulgaria’s participation in the event was Denitsa Stancheva.“I can proudly say that we, the Bulgarians in the US, and the wonderful Desi Dobreva represented Bulgaria at the largest event in the United States of America: World Culture Festival 2023,” one of the participants, Beatrice Mineva, was quoted as telling Bulgaria’s news and media portal Eurochicago.“We are grateful to the organizers of this event: Denitsa Stancheva Batedzha and her wonderful team, our wonderful choreographer, Irina Gocheva, and the Horo dance ensemble, who took care of the whole setup in collaboration with Ludo Mlado’s director, Pepi Petrov, and several more choreographers. A bow to all the dancers, bagpipers, mummers, the unparalleled Desi Dobreva, and to all who participated in this great event, with the sole purpose of showing everyone what a treasure we possess, namely our homeland Bulgaria!", Mineva said.The World Culture Festival was held for the fourth time. It took place at the National Mall in Washington, D.C. and was 
// organized by the Art of Living Foundation, an international NGO with an educational and humanitarian focus. According to the Foundation, 
// some 17,000 artists representing different cultural traditions from around the world participated in the event. There were over 450,000 registered visitors.  `,
//         // text: "11 Sofia, the University’s press",
//       //"text": "As of the 2023-2024 academic year, the Faculty of Classical and Modern Philology’s Modern Greek Philology programmes will jointly work with the Alexander S. Onassis Foundation to promote and develop modern Greek language and culture studies at the St Kliment Ohridski University of Sofia, the University’s press centre said on Tuesday.From 2023 to 2027, the Foundation will provide financial support for activities and projects carried out by the Bachelor's and Master's degree programmes in modern Greek studies. These include: a permanent seminar on Greek language and culture, which brings together distinguished experts in modern Greek studies from Bulgaria and abroad; seminars in Neo-Hellenic studies attended by professors from all Bulgarian universities offering Neo-Hellenic studies as part of their degree programmes; financial support for excelling students; the purchase of new books for the C. P. Cavafy Library; student seminars in Greece; student projects and cultural events; updating the curricula; scientific activities; and professional qualification of the teaching staff.",
//       "md5": "21f475b9b0f6e9e45ddb179f00006499",
//       "publishedAt": "2023-10-20T19:18:02.993Z"
//     }
//   },
//   "scrapedAt": "2023-10-20T19:18:02.993Z",
//   "langDetector": {
//     "language": {
//       "locale": "en",
//       "scores": [
//         [
//           "ukrainian",
//           0.29255555555555557
//         ],
//         [
//           "bulgarian",
//           0.1566333333333334
//         ],
//         [
//           "russian",
//           0.15483333333333327
//         ]
//       ]
//     }
//   },
//   "ner": [                                                                                                                                        
//   {                                                                                                                                      
//     score: '1.220',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 0, end: 0 }                                                                                                          
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.465',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'World Culture Festival',                                                                                                    
//     range: { start: 5, end: 7 }                                                                                                          
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.628',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Washington',                                                                                                                
//     range: { start: 17, end: 17 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.156',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'Bulgarian',                                                                                                                 
//     range: { start: 21, end: 21 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.652',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'US',                                                                                                                        
//     range: { start: 28, end: 28 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.904',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'Bulgarian',                                                                                                                 
//     range: { start: 35, end: 35 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.580',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 45, end: 45 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.523',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 52, end: 52 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.324',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Embassy',                                                                                                                   
//     range: { start: 54, end: 54 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.222',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Washington',                                                                                                                
//     range: { start: 56, end: 56 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.255',                                                                                                                      
//     tag: 'ORGANIZATION',                                                                                                                 
//     entity: 'Zherava',                                                                                                                   
//     range: { start: 68, end: 68 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.234',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Washington; Vereya',                                                                                                        
//     range: { start: 72, end: 73 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.333',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Horo',                                                                                                                      
//     range: { start: 75, end: 75 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.384',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Gaidari',                                                                                                                   
//     range: { start: 78, end: 78 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.242',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Chicago;',                                                                                                                  
//     range: { start: 82, end: 82 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.450',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Ludo Mlado',                                                                                                                
//     range: { start: 84, end: 85 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.147',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Boston',                                                                                                                    
//     range: { start: 89, end: 89 }                                                                                                        
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.100',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Georgi Andreev',                                                                                                            
//     range: { start: 100, end: 101 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.780',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'Bulgarian',                                                                                                                 
//     range: { start: 103, end: 103 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.850',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Desi Dobreva',                                                                                                              
//     range: { start: 105, end: 106 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.292',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 117, end: 117 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.458',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Denitsa Stancheva',                                                                                                         
//     range: { start: 124, end: 125 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.557',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'Bulgarians',                                                                                                                
//     range: { start: 136, end: 136 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.687',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'US',                                                                                                                        
//     range: { start: 139, end: 139 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.522',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Desi Dobreva',                                                                                                              
//     range: { start: 144, end: 145 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.037',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 147, end: 147 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.060',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'United States',                                                                                                             
//     range: { start: 154, end: 155 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.399',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'America',                                                                                                                   
//     range: { start: 157, end: 157 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.454',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'World Culture Festival',                                                                                                    
//     range: { start: 159, end: 161 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.050',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Beatrice Mineva',                                                                                                           
//     range: { start: 169, end: 170 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.109',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 176, end: 176 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.305',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Eurochicago',                                                                                                               
//     range: { start: 182, end: 182 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.546',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Denitsa Stancheva Batedzha',                                                                                                
//     range: { start: 195, end: 197 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.198',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Irina Gocheva',                                                                                                             
//     range: { start: 207, end: 208 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.085',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Horo',                                                                                                                      
//     range: { start: 212, end: 212 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.746',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Ludo Mlado',                                                                                                                
//     range: { start: 226, end: 227 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.791',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Pepi Petrov',                                                                                                               
//     range: { start: 231, end: 232 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.619',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Desi Dobreva',                                                                                                              
//     range: { start: 252, end: 253 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.056',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Bulgaria',                                                                                                                  
//     range: { start: 281, end: 281 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.952',                                                                                                                      
//     tag: 'PERSON',                                                                                                                       
//     entity: 'Mineva',                                                                                                                    
//     range: { start: 285, end: 285 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.448',                                                                                                                      
//     tag: 'MISC',                                                                                                                         
//     entity: 'World Culture Festival',                                                                                                    
//     range: { start: 289, end: 291 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.524',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'National Mall',                                                                                                             
//     range: { start: 304, end: 305 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '1.403',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'Washington',                                                                                                                
//     range: { start: 307, end: 307 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.675',                                                                                                                      
//     tag: 'LOCATION',                                                                                                                     
//     entity: 'D.C.',                                                                                                                      
//     range: { start: 309, end: 309 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.954',                                                                                                                      
//     tag: 'ORGANIZATION',                                                                                                                 
//     entity: 'Art of Living Foundation',                                                                                                  
//     range: { start: 315, end: 318 }                                                                                                      
//   },                                                                                                                                     
//   {                                                                                                                                      
//     score: '0.608',                                                                                                                      
//     tag: 'ORGANIZATION',                                                                                                                 
//     entity: 'NGO',                                                                                                                       
//     range: { start: 322, end: 322 }                                                                                                      
//   }                                                                                                                                      
//   ],
//   "sentiments": {
//     "emotion": "positive",
//     "classes": {
//       "__label__pos": 0.9999369382858276,
//       "__label__neg": 0.00008310515113407746
//     }
//   }
// }

// console.log(highlight({
//     text: data.scraper.message.text,
//     locale: data.langDetector.language.locale,
//     entities: data.ner
// }))