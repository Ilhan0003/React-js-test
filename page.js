"use client"
// import Data from "../../Components/Data"

async function Data(){
  const res = await fetch("https://pokeapi.co/api/v2/pokemon ")
  const data = await res.json()
  const raw = await data.results.forEach(function(i){
   
    console.log(i.name)

  })

}
const  page = async ()=>{
  const data = Data()
  return (
    <>
    DATAS
    </>
  )
}

export default page