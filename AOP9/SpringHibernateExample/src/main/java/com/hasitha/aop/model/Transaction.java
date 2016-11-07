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
public class Transaction {
    private int tra_id;
    private int tra_acc_id;
    private String tra_type;
    private double tra_amount;
    private int tra_related_acc;
    private int tra_state;
    private Timestamp tra_create;

    public int getTra_id() {
        return tra_id;
    }

    public void setTra_id(int tra_id) {
        this.tra_id = tra_id;
    }

    public int getTra_acc_id() {
        return tra_acc_id;
    }

    public void setTra_acc_id(int tra_acc_id) {
        this.tra_acc_id = tra_acc_id;
    }

    public String getTra_type() {
        return tra_type;
    }

    public void setTra_type(String tra_type) {
        this.tra_type = tra_type;
    }

    public double getTra_amount() {
        return tra_amount;
    }

    public void setTra_amount(double tra_amount) {
        this.tra_amount = tra_amount;
    }

    public int getTra_related_acc() {
        return tra_related_acc;
    }

    public void setTra_related_acc(int tra_related_acc) {
        this.tra_related_acc = tra_related_acc;
    }

    public int getTra_state() {
        return tra_state;
    }

    public void setTra_state(int tra_state) {
        this.tra_state = tra_state;
    }

    public Timestamp getTra_create() {
        return tra_create;
    }

    public void setTra_create(Timestamp tra_create) {
        this.tra_create = tra_create;
    }

    @Override
    public String toString() {
        return "Transaction{" + "tra_id=" + tra_id + ", tra_acc_id=" + tra_acc_id + ", tra_type=" + tra_type + ", tra_amount=" + tra_amount + ", tra_related_acc=" + tra_related_acc + ", tra_state=" + tra_state + ", tra_create=" + tra_create + '}';
    }
    
    
}
