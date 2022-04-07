<template>
   <div class="container">
         <br>
        <div class="card">
            <div class="card-header">
                
                <center><b>PAGOS DE RESIDENTES EN PARQUEO</b> </center>
                
            </div>

        <img alt="Vue logo" src="../assets/logo-bm.png">

            <div class="card-body">
                <h4 class="card-title"></h4>
               
                    <table class="table">
                        <thead>
                            <tr>
                                <th>PLACA</th>
                                <th>TIEMPO ESTACIONADO (MINUTOS)</th>
                                <th>CANTIDAD A PAGAR</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="pago in pagos" :key="pago.idVehiculo">
                                <td >{{pago.placa}}</td>
                                <td>{{pago.tiempoAcumulado}}</td>
                                <td>{{pago.montoTotal}}</td>
                               
                                
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
            pagos:[]
            }
        

    },



    created:function(){

        this.consultarPagos();

    },

    methods:{
        consultarPagos(){
            fetch('http://localhost:8000/api/pagos')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.estancias = []
                if(typeof datosRespuesta[0].success==='undefined')
                {
                    this.pagos=datosRespuesta;
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