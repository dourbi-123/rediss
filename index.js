const express=require("express")
const Ajv = require("ajv")
const ajv = new Ajv({allErrors:true})
const schema = require("./schema/index")
const app=express()
const swaggerJSDoc=require('swagger-jsdoc')
const swaggerUi=require("swagger-ui-express")


const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"Nodejs",
            version:"1.0.0"
        },
        servers:[
            {url:'http://localhost:3030/'}
        ]
    },
    apis:["./index.js"]
}

const swaggerspec=swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerspec))
/**
 * @swagger
 * /:
 *      get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: TO test Get method
 */


app.use(express.json())
app.post("/create",swaggerUi.serve,async(req,res,next)=>{
    const validate = ajv.compile(schema)
    const valid=validate(req.body)
    
    if(!valid){
        const erros=validate.errors
        return res.status(400).json({
            error:erros
        })
    }
    res.json({
        msg:"noerror"
    })
    

})

app.listen(3030,()=>{console.log("running")})

