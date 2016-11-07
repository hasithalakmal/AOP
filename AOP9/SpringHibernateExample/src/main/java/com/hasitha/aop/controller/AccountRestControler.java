/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.model.Account;
import com.hasitha.aop.service.AccountManagementService;
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
public class AccountRestControler {

    @Autowired
    AccountManagementService accountManagementService;

    @RequestMapping(value = "aop/api/account/register", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public String registeronline(@RequestBody Account a) {
        String msg = accountManagementService.registerAccount(a.getAcc_acch_id(), a.getAcc_balance());
        System.out.println(msg);
        return msg;
    }

    @RequestMapping(value = "aop/api/account/one-account", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Account> getAccountHolder(@RequestBody Account a) {
        Account newa = accountManagementService.getAccount(a.getAcc_id());
        return new ResponseEntity<Account>(newa, HttpStatus.OK);
    }

    @RequestMapping(value = "aop/api/account/", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<Account>> getAccountHolder() {
        List<Account> newa = accountManagementService.getAllAccounts();
        return new ResponseEntity< List<Account>>(newa, HttpStatus.OK);
    }

    @RequestMapping(value = "aop/api/account/user", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<List<Account>> getAccountUser(@RequestBody Account a) {
        List<Account> newa = accountManagementService.getUserAccounts(a.getAcc_acch_id());
        return new ResponseEntity<  List<Account>>(newa, HttpStatus.OK);
    }
}
