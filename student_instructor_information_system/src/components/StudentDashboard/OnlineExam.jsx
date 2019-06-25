import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import Select, {Option, OptGroup} from 'rc-select';
let qu = [];

let questionsAnswer = [];


export default class AddQuestion extends Component{
    constructor(props){
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer = this.onChangeAnswer.bind(this);
        this.onLoadQuestion = this.onLoadQuestion.bind(this);
        this.getSelectedDetails = this.getSelectedDetails.bind();



        this.state ={
            _id:'',
            exam:'5d101a7f8ea3e6391c6216c5',
            answer:'',
            questionsAn:[],
            examQuestions:[]

        }

    }

    getSelectedDetails(e){

        let qu = {
            id:e.target.value,
            answer:e.target.options.selectedIndex
        };

       if(e.target.checked){
            questionsAnswer.push(qu);
            console.log(questionsAnswer)
        }else if(!e.target.checked){
            var index = questionsAnswer.indexOf(e.target.checked);
            questionsAnswer.splice(index,1);
            console.log(questionsAnswer);
        }
    }

    onChangeQuestion(e){
        this.setState ({
            question:e.target.value
        })


    }



    onChangeAnswer(e){
        this.setState ({
            answer:e.target.value
        })
    }

    onLoadQuestion(e){
        this.setState ({
            _id:e.target.value
        })
    }

    componentDidMount() {

        axios.get('http://localhost:4000/exam/getDetailById/'+this.state.exam)
            .then(res=>{console.log(res.data);

                console.log(qu);
                this.setState ({
                    questionsAn:res.data.data
                });
                this.state.questionsAn.map(q => {
                   // console.log(q.questions);
                    qu.push(q.questions);

                });

                const subject_question ={
                    name:qu,
                };
                axios.post('http://localhost:8080/springQuestion/'+qu)
                    .then(res=>{console.log(res.data);
                        console.log(res.data);
                        this.setState({
                            examQuestions:res.data
                        })
                    });

                console.log("Hello");
                console.log(this.state.examQuestions);

                })
    }


    render(){
        return(
            <div>


                <table className="table">
                    <thead className="thead-dark">
                    <tr>


                        <th scope="col">Select</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.examQuestions.map(qua=>
                        <tr className="trStyle">


                            <td>
                                <div className="form-group row">
                                    <label className="control-label col-sm-2" htmlFor="pwd">{qua.question}</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" value={this.state.answer} onChange={this.getSelectedDetails}>
                                            <option value="">Choose here</option>
                                            <option value={qua._id} key="1">{qua.answer1}</option>
                                            <option value={qua._id} key="2">{qua.answer2}</option>
                                            <option value={qua._id} key="3">{qua.answer3}</option>
                                            <option value={qua._id} key="4">{qua.answer4}</option>
                                        </select>
                                    </div>
                                </div>
                            </td>

                        </tr>
                    )}
                    </tbody>
                </table>

                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Submit
                </button>
            </div>
        )
    }
}