<template>


    <div class="container">
        <br>
        <div class="card">
            <div class="card-header">
                
                <center><b>ESTANCIAS EN PARQUEO</b> </center>
                
            </div>

        <img alt="Vue logo" src="../assets/logo-bm.png">

            <div class="card-body">
                <h4 class="card-title"></h4>
               
                    <table class="table table-hover">
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
                                <td v-if="!estancia.salida">

                                    <div class="btn-group" role="group" aria-label="">
                                        <button type="button" v-on:click="darSalida(estancia.idEstancia)" class="btn btn-primary">DAR SALIDA</button>
                                        
                                    </div>


                                    
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
        },

        darSalida(id){
            console.log(id);

            fetch('http://localhost:8000/api/darSalida/'+id,{
                method:"PUT",
                //headers: { "Content-Type": "application/json" },
                //body: JSON.stringify("")
               
            })
            //.then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
              window.location.href='listar'
            })
            .catch(console.log)

        }
    }
}
</script>