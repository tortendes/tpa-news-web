import { strapi } from '@strapi/client'

export default function() {
    const runtime = useRuntimeConfig()
    const client = strapi({
        baseURL: process.env.STRAPI_URL || runtime.public.apiUrl || 'http://localhost:1337/api',
        auth: process.env.STRAPI_TOKEN || '644e201d45558279dbe6eb9c30db313882f5997ca2ef02671f9986375eecec801e77be6ec6fe8618f0b4a7e4980fc8d9888c42b5379b3b7c526434423c47293fe3ea6e1c84d23a472c3406fc882e529da3d995bdc783eb1f503b0619b7b6e08772a40ff861fb249ea484169625e688d550a7e6083e2007536b1daec80ad94854',
    })
    return client;
}