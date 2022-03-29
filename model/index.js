const {Sequelize,DataTypes,Op}=require('sequelize');

const con = new Sequelize('database','root','',{
host:'localhost',
dialect:'mysql'
});

con.authenticate()
.then(()=>{
    
    console.log('Connection Make Successfully !!');

})
.catch((error)=>{

    console.log('Connection Not Make Sucessfully !!!');
})

let db={};
db.Sequelize=Sequelize;
db.con=con;
db.user=require('./User')(Sequelize,DataTypes,Op,con)

Sequelize.afterSync({force:true});

module.exports=db;

