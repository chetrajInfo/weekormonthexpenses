package com.monthlyweekly.expensesproject.JpaEntity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="newrecord")
public class NewRecord {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="expensesDate")
    private Date expensesDate;

    @Column(name="expensesFrom")
    private String expensesFrom;

    @Column(name="businessName")
    private String businessName;

    @Column(name="totalAmount")
    private Double totalAmount;

    /*
    @Column(name="receiptImage")
    private String receiptImage;
     */

    @Column(name="notes")
    private String notes;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Date getExpensesDate() {
        return expensesDate;
    }

    public void setExpensesDate(Date expensesDate) {
        this.expensesDate = expensesDate;
    }

    public String getExpensesFrom() {
        return expensesFrom;
    }

    public void setExpensesFrom(String expensesFrom) {
        this.expensesFrom = expensesFrom;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    /*
    public String getReceiptImage() {
        return receiptImage;
    }

    public void setReceiptImage(String receiptImage) {
        this.receiptImage = receiptImage;
    }
*/
    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
