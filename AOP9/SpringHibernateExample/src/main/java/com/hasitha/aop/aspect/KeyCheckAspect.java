/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.aspect;

import com.hasitha.aop.dao.AccessDao;
import com.hasitha.aop.dao.AccountDao;
import com.hasitha.aop.dao.AccountHolderDao;
import com.hasitha.aop.model.Access;
import com.hasitha.aop.model.Account;
import com.hasitha.aop.model.AccountHolder;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
@Aspect
public class KeyCheckAspect {

    @Autowired
    AccessDao accessDao;

    @Autowired
    AccountHolderDao accountHolderDao;

    @Autowired
    AccountDao accountDao;

    /**
     * Following is the definition for a pointcut to select all the methods
     * available. So advice will be called for all the methods.
     */
    @Pointcut("execution(* registerOnline(..) )")
    private void registerOnlinepc() {
    }

    /**
     * This is the method which I would like to execute after a selected method
     * execution.
     *
     * @param called
     * @param pass_user_name
     * @param pass_password
     * @param account_id
     * @return
     */
    @Around("registerOnlinepc() && args(pass_user_name, pass_password, account_id)")
    public String aroundAdvice_registerOnlinepc(ProceedingJoinPoint called, String pass_user_name, String pass_password, int account_id) throws Throwable {
        System.out.println("AOP1 end");
        System.out.println(pass_user_name);
        Access newa = accessDao.getAccess(pass_user_name);
        if (newa.getPass_user_name() == null) {
            AccountHolder ah = accountHolderDao.getAccountHolder(account_id);
            if (ah.getAcch_name() != null) {
                called.proceed();
                return "{\"msg\":\"success\"}";
            } else {
                return "{\"msg\":\"Account Holder ID is Incorrect\"}";
            }
        } else {
            System.out.println(pass_user_name);
            return "{\"msg\":\"User Name is Already Exsist\"}";
        }
    }

    @Pointcut("execution(* transferMoney(..) )")
    private void transferMoneypc() {
    }

    /**
     *
     * @param called
     * @param tra_acc_from
     * @param tra_amount
     * @param tra_acc_to
     * @return
     * @throws Throwable
     */
    @Around("transferMoneypc() && args(tra_acc_from, tra_amount, tra_acc_to)")
    public String aroundAdvice_transferMoneypc(ProceedingJoinPoint called, int tra_acc_from, double tra_amount, int tra_acc_to) throws Throwable {
        System.out.println("AOP1 end");
        AccountHolder acch = accountHolderDao.getAccountHolder(tra_acc_from);
        Account acc1 = accountDao.getAccount(tra_acc_to);
        System.out.println(acc1.toString());
        if (acc1.getAcc_state()== 1) {
            Account acc = accountDao.getAccount(acch.getAcch_id());
            if (acc.getAcc_balance() > tra_amount + acc.getAcc_min_balance()) {
                called.proceed();
                return "{\"msg\":\"success\"}";
            } else {
                return "{\"msg\":\"Account Balance is Insuffisent\"}";
            }
        } else {
            return "{\"msg\":\"Tranfer Account Number is Invalid\"}";
        }
    }

}
