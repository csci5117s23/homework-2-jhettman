

import {app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { date, object, string, boolean} from 'yup';
import jwtDecode from 'jwt-decode';


const todoYup = object({
  todo: string().required(),
  done: boolean().required(),
  userId: string().required(),
  
  createdOn: date().default(() => new Date()),
})
//kluver's offered auth example
const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ','');
      
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  } 
}
app.use(userAuth)


crudlify(app, {todo: todoYup})


export default app.init();
