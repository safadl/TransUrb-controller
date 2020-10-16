import  {
    CHANGE_NAME,CHANGE_TYPEAB,CHANGE_ATTESTATION,CHANGE_DATE,
    CHANGE_ETAB,CHANGE_IDENTIF,CHANGE_LOCATION,
    CHANGE_PHOTO,CHANGE_SURNAME,CHANGE_TEL,CHANGE_EMAIL
} from './actions'

export const change_name=(value)=>({
    type:CHANGE_NAME,
    name:value
})
export const change_surname=(value)=>({
    type:CHANGE_SURNAME,
    surname:value
})
export const change_typeab=(value)=>({
    type:CHANGE_TYPEAB,
    typeab:value
})
export const change_attestation=(value)=>({
    type:CHANGE_ATTESTATION,
    attest:value
})
export const change_date=(value)=>({
    type:CHANGE_DATE,
    date:value
})
export const change_etab=(value)=>({
    type:CHANGE_ETAB,
    etab:value
})
export const change_identif=(value)=>({
    type:CHANGE_IDENTIF,
    identif:value
})
export const change_location=(value)=>({
    type:CHANGE_LOCATION,
    location:value
})
export const change_photo=(value)=>({
    type:CHANGE_PHOTO,
    photo:value
})
export const change_tel=(value)=>({
    type:CHANGE_TEL,
    tel:value
})
export const change_email=(value)=>({
    type:CHANGE_EMAIL,
    email:value
})