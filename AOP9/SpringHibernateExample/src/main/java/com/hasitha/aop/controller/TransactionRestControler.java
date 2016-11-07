/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.controller;

import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.model.Transaction;
import com.hasitha.aop.service.TransactionManagementService;
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
public class TransactionRestControler {

    @Autowired
    TransactionManagementService transactionManagementService;

    @RequestMapping(value = "aop/api/transaction/transfer", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public String registerAccountHolder(@RequestBody Transaction t) {
        String msg = transactionManagementService.transferMoney(t.getTra_acc_id(), t.getTra_amount(), t.getTra_related_acc());
        System.out.println(msg);
        return msg;
    }

    @RequestMapping(value = "aop/api/transaction/{accid}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<Transaction>> getAccountHolder(@PathVariable int accid, Model model) {
        List<Transaction> t = transactionManagementService.getTransactionsInquiries(accid);
        return new ResponseEntity<List<Transaction>>(t, HttpStatus.OK);
    }
}
