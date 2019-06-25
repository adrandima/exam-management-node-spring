import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import './style.css';

let selectedSubject = [];


export default class OnlineExam extends Component {
    constructor(props){
        super(props);

        this.onChangeSubject = this.onChangeSubject.bind(this);
      //  this.onChangeLecturer_id = this.onChangeLecturer_id.bind(this);
        this.onChangeQuestions = this.onChangeQuestions.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeKey = this.onChangeKey.bind(this);
        this.getSelectedDetails = this.getSelectedDetails.bind(this);
        this.getQuestionDetails = this.getQuestionDetails.bind(this);

        this.onDeleteExam = this.onDeleteExam.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            _id:'',
            subjects:[],
            name:'',
            subject:'',
            key:'',
            lecturer_id:'23',
            questions:[],
            exams:[],
            examQuestions:[],
        }
    }
    onChangeSubject(e){
        this.setState ({
            subject:e.target.value
        });

    }

    onChangeName(e){
        this.setState ({
            name:e.target.value
        })
    }
    onChangeQuestions(e){
        this.setState({
            questions:e.target.value
        })
    }

    onChangeKey(e){
        this.setState({
            key:e.target.value
        })
    }

    getSelectedDetails(e){

        if(e.target.checked){
            selectedSubject.push(e.target.value);
            console.log(selectedSubject)
        }else if(!e.target.checked){
            var index = selectedSubject.indexOf(e.target.checked);
            selectedSubject.splice(index,1);
            console.log(selectedSubject);
        }
    }

      onSubmit(){

        const subject_question ={
            name:this.state.name,
            subject:this.state.subject,
            lecturer_id:this.state.lecturer_id,
            key:this.state.key,
            questions:selectedSubject,

        };
        console.log("Test Submit");
        console.log(subject_question);
        axios.post('http://localhost:4000/exam/addExam',subject_question)
            .then(res=>{console.log(res.data)});
       // window.location.reload();
    }

    onDeleteExam(e){
        axios.delete(`http://localhost:4000/exam/delete/${e.target.value}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        window.location.reload();
    }

    componentDidMount() {
        console.log(this.state.lecturer_id);
        axios.get(`http://localhost:4000/instructor_subject/getSubjects/${this.state.lecturer_id}`)
            .then(res=>{
                console.log(res.data.data);
                this.setState({
                    subjects:res.data.data
                })
            });
        console.log("Hello");
        console.log(this.state.subjects);

        axios.get('http://localhost:4000/question/getAllQuestions')
            .then(res=>{
                this.setState({
                    questions:res.data.data
                })
            });

        axios.get('http://localhost:4000/exam/getAllExam')
            .then(res=>{
                this.setState({
                    exams: res.data.data
                })
            })
    }

    getQuestionDetails(e){
        console.log(e.target.value);
        axios.post('http://localhost:8080/springExam/'+e.target.value)
            .then(res=>{console.log(res.data)
                this.setState({
                    examQuestions:res.data
                })
            });
    }

    render(){
        return(
            <div>



                <div className="row">

                    <div className="col-sm-6 mb-3 mb-md-0">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <h5 className="card-title">Add Question</h5>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Name:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput8"
                                                   value={this.state.name}
                                                   onChange={this.onChangeName}
                                                   required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Subject:</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.subject} onChange={this.onChangeSubject} required>
                                                <option value="">Choose here</option>
                                                {this.state.subjects.map((team) => <option key={team._id} value={team.subject}>{team.subject}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Lecturer Id:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput0"
                                                   value={this.state.lecturer_id}
                                                   disabled/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Key:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput09"
                                                   value={this.state.key}
                                                   onChange={this.onChangeKey}
                                                   required/>
                                        </div>
                                    </div>

                                    <div className="clearfix">

                                        <button type="submit" className="btn btn-primary">Submit</button>

                                    </div>

                             </form>
                            </div>
                        </div>

                    </div>


                        <div className="ScrollStyle col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Questions</h5>

                                    <div>
                                        <table className="table">
                                            <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Mark</th>
                                                <th scope="col">Question</th>
                                                <th scope="col">Answer (1)</th>
                                                <th scope="col">Answer (2)</th>
                                                <th scope="col">Answer (3)</th>
                                                <th scope="col">Answer (4)</th>
                                                <th scope="col">Expected Answer</th>
                                                <th scope="col">Select</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.questions.map(qua=>
                                                <tr className="trStyle">
                                                    <th>{qua.mark}</th>
                                                    <td>{qua.question}</td>
                                                    <td>{qua.answer1}</td>
                                                    <td>{qua.answer2}</td>
                                                    <td>{qua.answer3}</td>
                                                    <td>{qua.answer4}</td>
                                                    <td>{qua.actual_answer}</td>
                                                    <td>
                                                        <input type="checkbox" value={qua._id}  onChange={this.getSelectedDetails}/>
                                                    </td>

                                                </tr>
                                            )}
                                            </tbody>
                                        </table>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>

                <div>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Lecturer Id</th>
                            <th scope="col">Key</th>
                            <th scope="col">Subjects</th>
                            <th scope="col">Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.exams.map(qua=>
                            <tr className="trStyle">
                                <th>{qua.name}</th>
                                <td>{qua.subject}</td>
                                <td>{qua.lecturer_id}</td>
                                <td>{qua.key}</td>
                                <td><button type="button" value={qua.questions} onClick={this.getQuestionDetails} class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">View</button></td>
                                <td>
                                    <button type="button" value={qua._id} onClick={this.onDeleteExam}
                                            className="btn btn-danger btn-lg" data-toggle="modal"
                                            data-target="#myModal">Delete
                                    </button></td>

                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>
                            <div className="modal-body">

                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Mark</th>
                                        <th scope="col">Question</th>
                                        <th scope="col">Answer (1)</th>
                                        <th scope="col">Answer (2)</th>
                                        <th scope="col">Answer (3)</th>
                                        <th scope="col">Answer (4)</th>
                                        <th scope="col">Expected Answer</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.examQuestions.map(qua=>
                                        <tr className="trStyle">
                                            <th>{qua.mark}</th>
                                            <td>{qua.question}</td>
                                            <td>{qua.answer1}</td>
                                            <td>{qua.answer2}</td>
                                            <td>{qua.answer3}</td>
                                            <td>{qua.answer4}</td>
                                            <td>{qua.actual_answer}</td>


                                        </tr>
                                    )}
                                    </tbody>
                                </table>




                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>


            </div>

            </div>
        )
    }
}