import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';


export default class tekkom extends Component {
    constructor(props) {
        super(props);
        //nyimpen data array yang dipanggil
        this.state = {
            tekkom: [],
            //alertt
            visible: false,

        };
    }

    handleButton = (alamat) => {
        alert("Alamat : " + alamat);
    };

    componentDidMount() {
        axios({
            method: "get",
       
            url: "   http://localhost:3000/user",
            headers: {
                accept: "*/*",
            },
        })
        //berhasil
            .then((data) => {
                console.log(data.data);
                this.setState({
                    tekkom: data.data,
                });
            })
            //eror
            .catch((error) => {
                console.log(error);
            });
    }
//inti
    render() {
        return (

            <div style={{ marginTop: 20 }}>
                <AppBar style={{ padding: "10px", marginBottom: "100px" }} >
                    <Typography style={{ margin: "auto" }}>List Nama</Typography>
                </AppBar>

                <Grid container md={11} spacing={4} style={{ marginTop: "50px", marginLeft:"auto", marginRight:"auto"}}>

                    {this.state.tekkom.map((results, index) => {   //nampilin data
                        return (
                            <Grid item key={results.name} md={3} >
                                <Card>
                                    <CardActionArea onClick={() => this.handleButton(results.address)}>
                                        <CardContent style={{ backgroundColor: '#cfe8fc'}}>
                                            <Typography>Name : {results.name}</Typography>
                                            <Typography>Username : {results.username}</Typography>
                                            <Typography>Email : {results.email}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>

        );
    }
}