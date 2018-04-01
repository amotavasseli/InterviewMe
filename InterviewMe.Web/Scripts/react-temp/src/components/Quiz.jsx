import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/quiz.css';
import Ionicon from 'react-ionicons';
import $ from 'jquery';
import * as QuizService from '../services/QuizService';

class Quiz extends Component {
    state = {
        questions: [],
        subject: null
    }

    getQuizzes = (subject) => {
        console.log(subject);
        QuizService.getSubject(subject).then(
            response => console.log(response),
            error => alert('error')
        )
    };
    render() {
        return (
            <div className='quiz'>
                <section className="section section-dark">
                    <h2 className='sectiontitle'>Lets Get It!</h2>
                    <div className='row'>                   
                        <div class="actions card col-xs-2">
                            <div class="card-body">
                                <div className='icons'>
                                    <Ionicon icon="ios-add-circle-outline" fontSize="35px" color="rgb(52, 128, 124)" />
                                </div>
                                <a>Add New Questions</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-2">
                            <div class="card-body">
                                <div className='icons'>
                                    <Ionicon icon="ios-card-outline" fontSize="35px" color="rgb(52, 128, 124)" />
                                </div>
                                <a>Flash Cards</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-2">
                            <div class="card-body">
                                <div className='icons'>
                                    <Ionicon icon="ios-paper-outline" fontSize="35px" color="rgb(52, 128, 124)" />
                                </div>
                                <a>Quiz</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-2">
                            <div class="card-body">
                                <div className='icons'>
                                    <Ionicon icon="ios-microphone-outline" fontSize="35px" color="rgb(52, 128, 124)" />
                                </div>
                                <a>Audio Test</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-light">
                    <h2 className='sectionName'>Study Sets</h2>

                    <div className="card col-lg 3" onClick={() => this.getQuizzes('C#')}>
                        <div className="card-body">
                            <h5 className="card-title">C#</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>

                    <div className="card col-lg 3" onClick={() => this.getQuizzes('Angular')}>
                        <div className="card-body">
                            <h5 className="card-title">Angular</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>

                    <div className="card col-lg 3" onClick={() => this.getQuizzes('ASP.NET')}>
                        <div className="card-body">
                            <h5 className="card-title">ASP.NET Fundamentals</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>

                    <div className="card col-lg 3" onClick={() => this.getQuizzes('React')}>
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>

                    <div className="card col-lg 3" onClick={() => this.getQuizzes('SQL Server')}>
                        <div className="card-body">
                            <h5 className="card-title">SQL Server 2016</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('JavaScript')}>
                        <div className="card-body">
                            <h5 className="card-title">JavaScript</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('OOP')}>
                        <div className="card-body">
                            <h5 className="card-title">OOP</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('Data Structures')}>
                        <div className="card-body">
                            <h5 className="card-title">Data Structures</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('ADO.NET')}>
                        <div className="card-body">
                            <h5 className="card-title">ADO.NET</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('HTML')}>
                        <div className="card-body">
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                    <div className="card col-lg 3" onClick={() => this.getQuizzes('Ajax')}>
                        <div className="card-body">
                            <h5 className="card-title">Ajax</h5>
                            <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classNamees and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9" /></a>
                            <a href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9" /></a>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
export default Quiz;