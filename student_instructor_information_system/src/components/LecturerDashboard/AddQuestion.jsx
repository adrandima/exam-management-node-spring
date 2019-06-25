import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';


import './style.css';


export default class AddQuestion extends Component{
    constructor(props){
        super(props);

        this.onChangeMark = this.onChangeMark.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer1 = this.onChangeAnswer1.bind(this);
        this.onChangeAnswer2 = this.onChangeAnswer2.bind(this);
        this.onChangeAnswer3 = this.onChangeAnswer3.bind(this);
        this.onChangeAnswer4 = this.onChangeAnswer4.bind(this);
        this.onChangeActual_answer = this.onChangeActual_answer.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

        this.state ={
            _id:'',
            questions:[],
            question:'',
            answer1:'',
            answer2:'',
            answer3:'',
            answer4:'',
            actual_answer:'',

        }

    }

    onChangeMark(e){
        this.setState ({
            mark:e.target.value
        })
    }
    onChangeQuestion(e){
        this.setState ({
            question:e.target.value
        })
    }

    onChangeAnswer1(e){
        this.setState({
            answer1:e.target.value
        })
    }

    onChangeAnswer2(e){
        this.setState({
            answer2:e.target.value
        })


    }

    onChangeAnswer3(e){
        this.setState({
            answer3:e.target.value
        })
    }

    onChangeAnswer4(e){
        this.setState({
            answer4:e.target.value
        })
    }

    onChangeActual_answer(e){
        console.log(e.target.value);

        this.setState({
            actual_answer:e.target.value
        })

    }



    onSubmit(){
        console.log("Test");
        const qs ={
            mark:this.state.mark,
            question:this.state.question,
            answer1:this.state.answer1,
            answer2:this.state.answer2,
            answer3:this.state.answer3,
            answer4:this.state.answer4,
            actual_answer:this.state.actual_answer,
        };

        console.log(qs);
        axios.post('http://localhost:4000/question/addQuestion',qs)
            .then(res=>{console.log(res.data)});
        window.location.reload();
    }

    onDelete(e){

        axios.delete(`http://localhost:4000/question/delete/${e.target.value}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        window.location.reload();
    }

    onEditSubmit(){
        console.log("Test");
        const qs ={
            mark:this.state.mark,
            question:this.state.question,
            answer1:this.state.answer1,
            answer2:this.state.answer2,
            answer3:this.state.answer3,
            answer4:this.state.answer4,
            actual_answer:this.state.actual_answer,
        };

        console.log(qs);
        axios.put(`http://localhost:4000/question/update/${this.state._id}`,qs)
            .then(res=>{console.log(res.data)});
        window.location.reload();
    }


    onEdit(e){
        axios.get(`http://localhost:4000/question/edit/${e.target.value}`)
            .then(res=>{
                console.log(res.data.data.question);
                console.log(res.data.data.answer1);
                console.log(res.data.data.answer2);console.log(res.data.data.answer3);

                this.setState({
                    _id:res.data.data._id,
                    mark:res.data.data.mark,
                    question:res.data.data.question,
                    answer1:res.data.data.answer1,
                    answer2:res.data.data.answer2,
                    answer3:res.data.data.answer3,
                    answer4:res.data.data.answer4,
                    actual_answer:res.data.data.actual_answer
                })
            })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/question/getAllQuestions')
            .then(res=>{
                this.setState({
                    questions:res.data.data
                })
            })
    }


    render(){
        return(
            <div>



                <div className="row">
                    <div className="col-sm-6 mb-3 mb-md-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Question</h5>

                                <form onSubmit={this.onSubmit}>


                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Mark:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput99"
                                                   value={this.state.mark}
                                                   onChange={this.onChangeMark}
                                                   />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Question:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput8"
                                                   value={this.state.question}
                                                   onChange={this.onChangeQuestion}
                                                   required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">1 st Answer:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   value={this.state.answer1}
                                                   onChange={this.onChangeAnswer1}
                                                   required/>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">2 nd Answer:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput2"
                                                   value={this.state.answer2}
                                                   onChange={this.onChangeAnswer2}
                                                   required/>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">3 rd Answer:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput3"
                                                   value={this.state.answer3}
                                                   onChange={this.onChangeAnswer3}
                                                   required/>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">4 th Answer:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleFormControlInput4"
                                                   value={this.state.answer4}
                                                   onChange={this.onChangeAnswer4}

                                                   required/>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Answer:</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.actual_answer} onChange={this.onChangeActual_answer} required>
                                                <option value="">Choose here</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="clearfix">
                                        <button type="reset" className="btn btn-danger">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="button" onClick={this.onEditSubmit} className="btn btn-warning">Edit</button>
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
                                                            <div className="clearfix">
                                                                <button type="submit" onClick={this.onDelete} value={qua._id} className="btn btn-danger">Delete</button>
                                                                <button type="button" onClick={this.onEdit} value={qua._id} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
                                                                    Edit
                                                                </button>
                                                            </div>


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
            </div>
        )
    }
}