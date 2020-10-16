import {CHANGE_NAME,CHANGE_TYPEAB,CHANGE_ATTESTATION,CHANGE_DATE,
  CHANGE_ETAB,CHANGE_IDENTIF,CHANGE_LOCATION,
  CHANGE_PHOTO,CHANGE_SURNAME,CHANGE_TEL,CHANGE_EMAIL,CHANGE_METHOD,CHANGE_REF} from '../actions/actions';

const initialState={
  name:"John",
  surname:"Doe",
  typeab:"Carte MOKI",
  attest:"",
  date:"21-09-2020",
  etab:"",
  identif:"CIN",
  location:"",
  photo:null,
  tel:"",
  email:"",
  method:"PAIEMENT MOBILE",
  ref:""
};

export const mainReducer=(state=initialState,action)=>{
switch (action.type) {
  case CHANGE_NAME:
    return {...state,name:action.name}
 case CHANGE_SURNAME:
   return {...state,surname:action.surname}
   case CHANGE_TYPEAB:
     return {...state,typeab:action.typeab}
   case CHANGE_EMAIL:
     return {...state,email:action.email}
  case CHANGE_ETAB:
    return {...state,etab:action.etab}
  case CHANGE_IDENTIF:
    return {...state,identif:action.identif}
  case CHANGE_PHOTO:
    return {...state,photo:action.photo}
  case CHANGE_TEL:
    return {...state,tel:action.tel}
  case CHANGE_DATE:
    return {...state,date:action.date}
  case CHANGE_ATTESTATION:
    return {...state,attest:action.attest}
  case CHANGE_LOCATION:
    return {...state,location:action.location}
    case CHANGE_METHOD:
      return {...state,method:action.method}
      case CHANGE_REF:
        return {...state,ref:action.ref}

  default:
    return state
}
}