import React from 'react'
import { clothing } from '../data/UserClothing'
import { useState } from 'react'
const OutfitGenerator = () => {
    // console.log(clothing)
    // const [clothesList,setClothesList] = useState(clothing)
    // const [dressCode, setDressCode] = useState('casual');
    // const [dressCode,setDressCode] = useState("casual")
    const [dressCode,setDressCode] = useState({dressCode: "casual"})
    // const [clothesList1,setClothesList1] = useState([])
//     const filterByOcc = (type) => {
//     const filteredItems = clothing.filter(
//       (clothingItem) =>
//         clothingItem.type === type && clothingItem.dressCode === dressCode
//       );

//       return filteredItems[Math.floor(Math.random() * filteredItems.length)];
//   };
    const filterByOcc = (type) => {
        // const empty = [...clothing]
        console.log(clothing)
        const arrCopy = clothing.filter((ele)=> 
            ele.type === type && ele.dressCode === dressCode.dressCode
        )
        console.log("arrCopy",arrCopy)
        
        // setClothesList1(result)
        // console.log(result);
        // let randomIdxTop = Math.floor(Math.random() * result.top.length);
        // let randomIdxBottom = Math.floor(Math.random() * result.bottom.length);
        // let randomIdxShoes = Math.floor(Math.random() * result.shoes.length);
        // const randomTop = result.top[randomIdxTop]
        // const randomBot = result.bottom[randomIdxBottom]
        // const randomShoe = result.shoes[randomIdxShoes]
        
        // setClothesList1([randomTop,randomBot,randomShoe])
        return arrCopy[[Math.floor(Math.random() * arrCopy.length)]]
    }
    
    return (
    <div className='planner-container'>
        <h1>Outfit Planner</h1>
        {/* {console.log(clothesList1)} */}
        <button onClick={() => setDressCode({dressCode: "casual"})}>Casual</button>
        <button onClick={() => setDressCode({dressCode: "sport"})}>sport</button>
        <button onClick={() => setDressCode({dressCode: "formal"})}>formal</button>
        <div>
            <p>top</p>
            <img src={filterByOcc("top").imageUrl} alt="" />
        </div>
        <div>
            <p>bottom</p>
            <img src={filterByOcc("bottom").imageUrl} alt="" />
        </div>
        <div>
            <p>show</p>
            <img src={filterByOcc("shoes").imageUrl} alt="" />
        </div>
    </div>
  )
}

export default OutfitGenerator

// const filterByOcc = (occ) => {
//         const empty = [...clothing]
//         const arrCopy = empty.filter((ele)=> {
//             return ele.dressCode === occ
//         })
//         console.log("arrCopy",arrCopy)
//         const copy = [...arrCopy]
//         // console.log(copy)
//         const result = copy.reduce(function (r, a) {
//                 r[a.type] = r[a.type] || [];
//                 r[a.type].push(a);
//             return r;
//         }, []);
//         // setClothesList1(result)
//         console.log(result);
//         let randomIdxTop = Math.floor(Math.random() * result.top.length);
//         let randomIdxBottom = Math.floor(Math.random() * result.bottom.length);
//         let randomIdxShoes = Math.floor(Math.random() * result.shoes.length);
//         const randomTop = result.top[randomIdxTop]
//         const randomBot = result.bottom[randomIdxBottom]
//         const randomShoe = result.shoes[randomIdxShoes]
        
//         setClothesList1([randomTop,randomBot,randomShoe])
//         console.log(randomTop)
//         console.log(randomBot)
//         console.log(randomShoe)
//         console.log("final",clothesList1)
//         // Shuffle array
//         // const shuffled = result.sort(() => 0.5 - Math.random());
//         // console.log("shuffled",shuffled)
//         // Get sub-array of first n elements after shuffled
//         // let selected = shuffled.slice(0, 3);
//         // console.log(selected)
        
        
//         // console.log(random);
//         // console.log(clo)
//     }