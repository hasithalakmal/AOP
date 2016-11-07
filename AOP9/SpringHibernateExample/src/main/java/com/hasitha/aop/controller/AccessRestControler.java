/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.model.Access;
import com.hasitha.aop.service.AccessManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hasitha Lakmal
 */
@RestController
@Component
public class AccessRestControler {

    @Autowired
    AccessManagementService accessManagementService;

    @RequestMapping(value = "aop/api/access/register", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public String registeronlineUser(@RequestBody Access a) {
        String msg = accessManagementService.registerOnline(a.getPass_user_name(), a.getPass_password(), a.getPass_acch_id());
        return msg;
    }

    @RequestMapping(value = "aop/api/access/update", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public String updatePassword(@RequestBody Access a) {
        Access a_old = accessManagementService.getAccess(a.getPass_user_name());
        System.out.println(a_old.toString());
        if (a_old.getPass_password() != null) {
            String msg = accessManagementService.changePassword(a.getPass_user_name(), a.getPass_password());
            System.out.println(msg);
            return msg;
        } else {
            return "{\"msg\":\"User is Not Defined\"}";
        }

    }
    
    @RequestMapping(value = "aop/api/access/activate", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public String activateAccount(@RequestBody Access a) {
        Access a_old = accessManagementService.getAccess(a.getPass_user_name());
        if (a_old.getPass_password() != null) {
            accessManagementService.approveAccount(a.getPass_user_name());
            return "Success";
        } else {
            return "No User";
        }

    }

    @RequestMapping(value = "aop/api/access/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity<Access> login(@RequestBody Access a) {
        Access anew = accessManagementService.login(a.getPass_user_name(), a.getPass_password());
        return new ResponseEntity<Access>(anew, HttpStatus.OK);

    }

    @RequestMapping(value = "aop/api/access/one-user", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Access> getAccountHolder(@RequestBody Access a) {
        Access newa = accessManagementService.getAccess(a.getPass_user_name());
        return new ResponseEntity<Access>(newa, HttpStatus.OK);
    }
    
    

}
