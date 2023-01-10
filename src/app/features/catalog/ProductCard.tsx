import { LoadingButton } from "@mui/lab";
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../context/StoreContext";
import { Product } from "../../models/product";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { currencyFormat } from "../../util/util";
import { addBasketItemAsync } from "../basket/basketSlice";


interface Props {
    product:Product;
}

export default function ProductCard({product}:Props){

    const {status} = useAppSelector(state=>state.basket);
    //Model with Redux toolkit
    const dispatch = useAppDispatch();


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
                loading={status.includes('pendingAddItem' + product.id)} 
                onClick = {()=>dispatch(addBasketItemAsync({productId: product.id}))} 
                size="small" > 
                Add to cart
              </LoadingButton>
              <Button component={Link} to={`/catalog/${product.id}`} size="small" >View</Button>
        </CardActions>
      </Card>
    )
}
