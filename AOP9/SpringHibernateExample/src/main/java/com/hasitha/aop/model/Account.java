/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.model;

import java.sql.Timestamp;

/**
 *
 * @author Hasitha Lakmal
 */
public class Account {
    private int acc_id;
    private int acc_acch_id;
    private double acc_min_balance;
    private String acc_type;
    private double acc_balance;
    private int acc_state;
    private Timestamp  acc_create;
    private Timestamp acc_last_modified;

    public int getAcc_id() {
        return acc_id;
    }

    public void setAcc_id(int acc_id) {
        this.acc_id = acc_id;
    }

    public int getAcc_acch_id() {
        return acc_acch_id;
    }

    public void setAcc_acch_id(int acc_acch_id) {
        this.acc_acch_id = acc_acch_id;
    }

    
    public double getAcc_min_balance() {
        return acc_min_balance;
    }

    public void setAcc_min_balance(double acc_min_balance) {
        this.acc_min_balance = acc_min_balance;
    }

    public String getAcc_type() {
        return acc_type;
    }

    public void setAcc_type(String acc_type) {
        this.acc_type = acc_type;
    }

    public double getAcc_balance() {
        return acc_balance;
    }

    public void setAcc_balance(double acc_balance) {
        this.acc_balance = acc_balance;
    }

    public int getAcc_state() {
        return acc_state;
    }

    public void setAcc_state(int acc_state) {
        this.acc_state = acc_state;
    }

    public Timestamp getAcc_create() {
        return acc_create;
    }

    public void setAcc_create(Timestamp acc_create) {
        this.acc_create = acc_create;
    }

    public Timestamp getAcc_last_modified() {
        return acc_last_modified;
    }

    public void setAcc_last_modified(Timestamp acc_last_modified) {
        this.acc_last_modified = acc_last_modified;
    }

    @Override
    public String toString() {
        return "Account{" + "acc_id=" + acc_id + ", acc_acch_id=" + acc_acch_id +  ", acc_min_balance=" + acc_min_balance + ", acc_type=" + acc_type + ", acc_balance=" + acc_balance + ", acc_state=" + acc_state + ", acc_create=" + acc_create + ", acc_last_modified=" + acc_last_modified + '}';
    }
    
    
    
    
}
