/**
 *College will be a functional componene t defined using a prototype constrytor

 Props: name, city
 */

 // extaracting the destructed name and city in the param list is equivalent to have function College(props){
 //const name = props.name
 //}
function College({name, city}){
  //In functional components we do not need to write the name of the new method rendor() within College
  //We can simple return , and this returns from render() automtically
    return(
    <h2> 
        {name} :{city}
    </h2>
   )
}
export default College