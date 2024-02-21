const ProductList = () => {
    const data=[
        {
       id:Math.random(),name:"PARTAGEZ CE PRODUIT Ushas palette de fards à paupières - TREASURE NEUTRAL ", 
       pic:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/3077/1.jpg?9290",
      price:"35 dt",
    },
    
    
    {
        id:Math.random(),name:"Generic Palette de 9 fards à paupières -Nude        ", 
        pic:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/8777/1.jpg?0744",
       price:"26dt",
    },

     {
        id:Math.random(),name:"PARTAGEZ CE PRODUIT Top Face Rouge à lèvres mat - Instyle - 012 ", 
        pic:" https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/13/1496/1.jpg?3647",
       price:"24 dt",
     },

     {
        id:Math.random(),name:" Arvea L'extreme parfum ", 
        pic:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/2287/1.jpg?2088  ",
       price:"35 dt",
     } ,
];
  return <div>
    {
     data.map(el =>  <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={el.pic} />
     <Card.Body>
       <Card.Title>{el.name}</Card.Title>
       <Card.Text>
       {  `the price of ${el.name} is ${el.price}`}
       </Card.Text>
       <Button variant="primary">Info</Button>
     </Card.Body>
   </Card>)
    }

    </div>
  
}

export default ProductList
