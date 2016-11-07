/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.model.Account;
import com.hasitha.aop.model.Client_message;
import com.hasitha.aop.service.Client_messageManagementService;
import java.util.List;
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
public class Client_messageManagementRestControler {
    
    @Autowired
    Client_messageManagementService client_messageManagementService;
    
    @RequestMapping(value = "aop/api/msg/register", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public String registeronline(@RequestBody Client_message cm) {
        String msg = client_messageManagementService.addClient_message(cm.getMsg_title(),cm.getMsg_body(),cm.getMsg_acch_id());
        System.out.println(msg);
        return msg;
    }
    
    
    @RequestMapping(value = "aop/api/msg/", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<Client_message>> getAccountUser() {
        List<Client_message> newa = client_messageManagementService.getAllClient_messages();
        return new ResponseEntity<  List<Client_message>>(newa, HttpStatus.OK);
    }
}
