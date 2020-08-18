import React from 'react'
import Base from '../core/Base'

const  AddCustomer = () => {
    return (
        <Base>



            <form className="container" style={{width:'700px'}}>
                <div className="form-group">
                    <label for="Name">Name</label>
                    <input type="text" className="form-control" id='name' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <label>Title</label><br/>
                <div>
                    
                    <input type="radio" name="title" id="wedding" value="Wedding"/>
                    <label for="wedding" className='pa1' style={{width:'200px'}}> Wedding</label>
                    <input type="radio" name="title" id="reception" value="receptiton"/>
                    <label for="reception" className='pa1' style={{width:'200px'}}> Reception</label>
                    <input type="radio" name="title" id="engagement" value="engagement"/>
                    <label for="engagement" className='pa1' style={{width:'200px'}}> Engagement</label><hr/>
                    <input type="radio" name="title" id="birthday" value="birthday"/>
                    <label for="birthday" className='pa1' style={{width:'200px'}}> Birthday</label>
                    <input type="radio" name="title" id="pre wedding shoots" value="pre wedding shoots"/>
                    <label for="Pre Wedding Shoots" className='pa1' style={{width:'200px'}}> Pre Wedding Shoots</label>
                    <input type="radio" name="title" id="others" value="others"/>
                    <label for="others" className='pa1' style={{width:'200px'}}> Others</label>
                </div>
                <label>Status</label><br/>
                <div>
                    <input type="radio" name="title" id="confirmed" value="confirmed"/>
                    <label for="confirmed" className='pa1' style={{width:'300px'}}> Confirmed</label>
                    <input type="radio" name="title" id="pending" value="pending"/>
                    <label for="pending" className='pa1'> Pending</label>
                </div>
                <label>Upload Photos</label><br/>
                <input type="file" id="myFile" name="filename"></input>
                <hr/>
                <label>Sample Videos</label><br/>
               
                <label style={{WebkitTextFillColor:'yellow'}}>Click add more to add IDs of youtube videos</label><br/>
                
                <label style={{WebkitTextFillColor:'yellow'}}>Add more</label><br/>

                <button type="submit" class="btn btn-warning btn-block" id="saveButton" >Submit</button>

                
            </form>



            

        </Base>
    )
}

export default AddCustomer;
