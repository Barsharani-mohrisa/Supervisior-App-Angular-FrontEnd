import { AbstractType, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})


export class ApiService
{
    get: any;
   set : any;
   User:any;
  
   


    constructor( private _http:HttpClient){ }

    
    apiUrl5500 = 'http://localhost:5500/add_supervisior';

    createData(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl5500}`,data);
    }

    apiUrl = 'http://localhost:3000/account';

    getAllData():Observable<any>
    {
        return this._http.get(`${this.apiUrl}`);
    }

    // createData(data:any):Observable<any>
    // {
    //     return this._http.post(`${this.apiUrl}`,data);
    // }

    deleteData(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl}/${ids}`);
    }

    
    updateData(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl}/${ids}`, data);
    }

   
    apiUrl2 = 'http://localhost:3000/user';

    getData():Observable<any>
    {
        return this._http.get(`${this.apiUrl2}`);
        
    }


    apiUrl3 = 'http://localhost:3000/community';
    getCommunity():Observable<any>
    {
        return this._http.get(`${this.apiUrl3}`);
        
    }

    createCommunity(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl3}`,data);
    }

    updateCommunity(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl3}/${ids}`, data);
    }

    deleteCommunity(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl3}/${ids}`);
    }


    apiUrl4 = 'http://localhost:3000/city';
    getCity():Observable<any>
    {
        return this._http.get(`${this.apiUrl4}`);
        
    }

    createCity(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl4}`,data);
    }

    updateCity(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl4}/${ids}`, data);
    }

    deleteCity(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl4}/${ids}`);
    }

    apiUrl5 = 'http://localhost:3000/role';
    getRole():Observable<any>
    {
        return this._http.get(`${this.apiUrl5}`);
        
    }
    createRole(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl5}`,data);
    }

    updateRole(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl5}/${ids}`, data);
    }

    apiUrl6 = 'http://localhost:3000/super';
    getSuper():Observable<any>
    {
        return this._http.get(`${this.apiUrl6}`);
        
    }

    createSuper(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl6}`,data);
    }

    updateSuper(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl6}/${ids}`, data);
    }
    
    deleteSuper(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl6}/${ids}`);
    }
    
    apiUrl7 = 'http://localhost:3000/complain';
    getComplain():Observable<any>
    {
        return this._http.get(`${this.apiUrl7}`);
        
    }

    apiUrl8 = 'http://localhost:3000/notice';
    getNotice():Observable<any>
    {
        return this._http.get(`${this.apiUrl8}`);
        
    }
    
   /* 
    createNotice(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl8}`,data);
    }
*/
    updateNotice(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl8}/${ids}`, data);
    }

    deleteNotice(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl8}/${ids}`);
    }

    apiUrl9 = 'http://localhost:3000/emergency';
    getDial():Observable<any>
    {
        return this._http.get(`${this.apiUrl9}`);
        
    }
    createDial(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl9}`,data);
    }

    updateDial(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl9}/${ids}`, data);
    }

    deleteDial(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl9}/${ids}`);
    }

    apiUrl10 = 'http://localhost:3000/services';
    getServices():Observable<any>
    {
        return this._http.get(`${this.apiUrl10}`);
        
    }

    createServices(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl10}`,data);
    }
    updateServices(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl10}/${ids}`, data);
    }

    deleteServices(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl10}/${ids}`);
    }

    apiUrl11 = 'http://localhost:3000/servicecategory';
    getCategory():Observable<any>
    {
        return this._http.get(`${this.apiUrl11}`);
        
    }
    createCategory(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl11}`,data);
    }
    updateCategory(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl11}/${ids}`, data);
    }

    deleteCategory(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl11}/${ids}`);
    }
    apiUrl12 = 'http://localhost:3000/security';
    getSecurity():Observable<any>
    {
        return this._http.get(`${this.apiUrl12}`);
        
    }
    
    createSecurity(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl12}`,data);
    }

    deleteSecurity(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl12}/${ids}`);
    }

    
    updateSecurity(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl12}/${ids}`, data);
    }


    apiUrl13= 'http://localhost:3000/approved';
    updateAccountStatus(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.patch(`${this.apiUrl13}/${ids}`, data);
    }


    apiUrl14 = 'http://localhost:3000/notapproved';
    AccountStatus(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl14}/${ids}`, data);
    }
    apiUrl15 = 'http://localhost:3000/block';
    getBlock():Observable<any>
    {
        return this._http.get(`${this.apiUrl15}`);
        
    }
    createBlock(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl15}`,data);
    }

    updateBlock(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl15}/${ids}`, data);
    }

    deleteBlock(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl15}/${ids}`);
    }

    apiUrl16 = 'http://localhost:3000/floor';
    getFloor():Observable<any>
    {
        return this._http.get(`${this.apiUrl16}`);
        
    }
    getFloorById(block_id:any):Observable<any>
    {
        let ids = block_id;
        return this._http.get(`${this.apiUrl16}/${ids}`);
        
    }
    createFloor(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl16}`,data);
    }

    updateFloor(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl16}/${ids}`, data);
    }

    deleteFloor(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl16}/${ids}`);
    }

    apiUrl17 = 'http://localhost:3000/flat';
    getFlat():Observable<any>
    {
        return this._http.get(`${this.apiUrl17}`);
        
    }

    createFlat(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl17}`,data);
    }

    updateFlat(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl17}/${ids}`, data);
    }

    deleteFlat(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl17}/${ids}`);
    }

    apiUrl18 = 'http://localhost:3000/gate';
    getGate():Observable<any>
    {
        return this._http.get(`${this.apiUrl18}`);
        
    }
    createGate(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl18}`,data);
    }

    updateGate(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl18}/${ids}`, data);
    }

    deleteGate(id:any):Observable<any>
    {
        let ids = id;
        return this._http.delete(`${this.apiUrl18}/${ids}`);
    }

    apiUrl19 = 'http://localhost:3000/directory';

    getDirectory():Observable<any>
    {
        return this._http.get(`${this.apiUrl19}`);   
    }
    apiUrl20 = 'http://localhost:3000/notice2';
    getNotice2():Observable<any>
    {
        return this._http.get(`${this.apiUrl20}`);
        
    }
    createNotice2(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl20}`,data);
    }
    apiUrl21= 'http://localhost:3000/residentapproved';
    updateResidentStatus(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl21}/${ids}`, data);
    }


    apiUrl22 = 'http://localhost:3000/residentnotapproved';
    ResidentStatus(id:any,data:any):Observable<any>
    {
        let ids = id;
        return this._http.put(`${this.apiUrl22}/${ids}`, data);
    }

    apiUrl23 = 'http://localhost:3000/getflat';
    getgetFlat():Observable<any>
    {
        return this._http.get(`${this.apiUrl23}`);
        
    }


    
    apiUrl24 = 'http://localhost:5500/create_notice';
   
    createNotice(subject:any,message:any,media:any)
    {
       const apiUrl24 = 'http://localhost:5500/create_notice';
       const formData: FormData = new FormData();
       formData.append('media', media,media.name);
       formData.append('subject',subject);
       formData.append('message',message);
       return this._http.post(apiUrl24, formData);

    }
   
}