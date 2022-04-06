<template>

    <div class="container">
        
        <div class="card">
            <div class="card-header">
                
                <center><b>ESTANCIAS EN PARQUEO</b> </center>
                
            </div>

        <img alt="Vue logo" src="../assets/logo-bm.png">

            <div class="card-body">
                <h4 class="card-title"></h4>
               
                    <table class="table">
                        <thead>
                            <tr>
                                <th>PLACA</th>
                                <th>ENTRADA</th>
                                <th>SALIDA</th>
                                <th>IMPORTE</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="estancia in estancias" :key="estancia.idEstancia">
                                <td >{{estancia.placa}}</td>
                                <td>{{estancia.entrada}}</td>
                                <td>{{estancia.salida}}</td>
                                <td >{{estancia.importe}}</td>
                                <td >
                                    <a name="" id="" class="btn btn-primary" href="#" role="button">DAR SALIDA</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

            </div>
            <div class="card-footer text-muted">
                BLUE MEDICAL PARQUEO TORRE 1
            </div>
        </div>
        
        

    </div>
</template>

<script>

export default {

    data(){
        return{
            estancias:[]
            }
        

    },



    created:function(){

        this.consultarEstancias();

    },

    methods:{
        consultarEstancias(){
            fetch('http://localhost:8000/api/estancias')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.estancias = []
                if(typeof datosRespuesta[0].success==='undefined')
                {
                    this.estancias=datosRespuesta;
                }
            })
            .catch(console.log)
        }
    }
}
</script>