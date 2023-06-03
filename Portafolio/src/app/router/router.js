const router = require('express')();
const pug = require('pug');
const db = require('../../../models/index');
const proyectos = db.sequelize.models.proyectos
const raiz = `${__dirname.replace("router","view").replace("app","public")}/page`

router.get("/",async(req,res)=>{
    let result1 = await proyectos.findAll();
    console.log(result1);
    const htmlListo = pug.renderFile(`${raiz}/index.pug`,{
        projects : result1
    });
    res.write(htmlListo);
    res.end();
})

module.exports = router