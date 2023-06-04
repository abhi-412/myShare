import {createClient} from '@sanity/client';
import  ImageUrlBuilder  from "@sanity/image-url";

export const Client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2022-11-16',
    useCdn:true,
    token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(Client);
export const urlFor = (source)=>builder.image(source);