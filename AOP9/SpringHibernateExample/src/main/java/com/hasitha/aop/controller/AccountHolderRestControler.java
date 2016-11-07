/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.service.AccountHolderManagementService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
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
public class AccountHolderRestControler {

    @Autowired
    AccountHolderManagementService accountHolderManagementService;

    @RequestMapping(value = "aop/api/account-holder/register", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public String registerAccountHolder(@RequestBody AccountHolder ah) {
        String msg = accountHolderManagementService.registerAccountHolder(ah.getAcch_name(), ah.getAcch_mobile(), ah.getAcch_adress());
        System.out.println(msg);
        return msg;
    }

    @RequestMapping(value = "aop/api/account-holder/update", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public String updateAccountHolder(@RequestBody AccountHolder ah) {
        AccountHolder ah_old = accountHolderManagementService.getAccountHolder(ah.getAcch_id());
        System.out.println(ah.getAcch_name());
        if (ah_old.getAcch_name() != null) {
            String msg = accountHolderManagementService.updateAccountHolderDetails(ah.getAcch_id(), ah.getAcch_name(), ah.getAcch_mobile(), ah.getAcch_adress());
            System.out.println(msg);
            return msg;
        } else {
             return "{\"msg\":\"No user\"}";
        }

    }

    @RequestMapping(value = "aop/api/account-holder/{acch_id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<AccountHolder> getAccountHolder(@PathVariable int acch_id, Model model) {
        AccountHolder ah = accountHolderManagementService.getAccountHolder(acch_id);
        return new ResponseEntity<AccountHolder>(ah, HttpStatus.OK);
    }
    
    @RequestMapping(value = "aop/api/account-holder/", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<AccountHolder>> getAccountHolder() {
        List<AccountHolder> ah = accountHolderManagementService.getAllAccountHolders();
        return new ResponseEntity<List<AccountHolder>>(ah, HttpStatus.OK);
    }
}
