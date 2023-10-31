import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import classes from './UserProfile.module.css';
import Card from './Card/Card';
import Products from './Shop/Product';
import { uiActions } from '../Store/UISlice';
import Notification from './UI/Notification'


let IsInitial = true;

const UserProfile = (props) => {

  const showCart = useSelector(state => state.ui.cardIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

      // with useEffect we should not use (useEffect(async() =>) async like this
      useEffect(() => {
        const sensCardData = async () => {
          dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message:  'Sending card data'
          }))
            const response = await fetch("http://localhost:5000/todos", {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            if(!response.ok){
                throw new Error("Sending error data")
            }

            dispatch(uiActions.showNotification({
              status: 'success',
              title: 'Success',
              message:  'Send card data successfully'
            }))
        }

        // When we reload then will not see the notification, if perform any functionality then only notification comes
        if(IsInitial){
          IsInitial = false;
          return;
        }

        sensCardData().catch(error => {
          dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message:  'Sending error data'
          }))
        })
        //cart and dispatch both have dependancy 
    }, [cart, dispatch])

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      {notification && <Notification />}
        {showCart && <Card />}
        <Products />
    </main>
  );
};

export default UserProfile;
