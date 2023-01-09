import { LoadingButton } from "@mui/lab";
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../api/agent";
// import { useStoreContext } from "../../context/StoreContext";
import { Product } from "../../models/product";
import { useAppDispatch } from "../../store/configureStore";
import { currencyFormat } from "../../util/util";
import { setBasket } from "../basket/basketSlice";


interface Props {
    product:Product;
}

export default function ProductCard({product}:Props){

    const [loading, setLoading] = useState(false);
    //Model with Redux toolkit
    const dispatch = useAppDispatch();


    //Example with store context
    //const {setBasket} = useStoreContext();

    function handleAddItem (productId : number){
        setLoading(true);
        agent.Basket.addItem(productId)
             .then(basket=>dispatch(setBasket(basket)))
             .catch(error=>console.log(error))
             .finally(()=>setLoading(false));
}


    return(
        <Card>
          <CardHeader avatar={
                <Avatar sx={{bgcolor:"secondary.main"}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
          }

          title={product.name}
          titleTypographyProps={{
              sx : {fontWeight:"bold", color:'primary.main'}
          }}

          />
          <CardMedia
          sx = {{height:140, backgroundSize:"contain", bgcolor:"primary.light"}}
          image= 'http://picsum.photos/200'
          title={product.name}
           />


            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                     {currencyFormat(product.price)}
                 </Typography>
              <Typography variant="body2" color="text.secondary">
                    {product.brand}/{product.type}
                </Typography>
            </CardContent>
          <CardActions>
              <LoadingButton 
              loading={loading} 
              onClick = {()=>handleAddItem(product.id)} 
              size="small"
              > 
              Add to cart
              </LoadingButton>
              <Link 
              to={`/catalog/${product.id}`}
              >
              <Button size="small" >View</Button>
              </Link>
        </CardActions>
      </Card>
    )
}