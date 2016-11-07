/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.model.Account;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface AccountManagementService {

    public String registerAccount(int acc_acch_id, double acc_ininital_balance);

    public Account getAccount(int acc_id);

    public List<Account> getAllAccounts();

    public List<Account> getUserAccounts(int acc_acch_id);

}
