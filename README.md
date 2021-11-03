#Tạo database "shop"

#Tạo những bảng sau trong mysql:

create table product(<br>
  productID varchar(10) PRIMARY KEY,<br>
  productName varchar(50) NOT NULL,<br>
  productTypeID varchar(10) NOT NULL,<br>
  salePrice int NOT NULL,<br>
  description varchar(255)<br>
)

create table feedback(<br>
  feedbackID varchar(10) PRIMARY KEY,<br>
  custName varchar(50),<br>
  productName varchar(50) NOT NULL,<br>
  custPhone varchar(11),<br>
  custEmail varchar(50),<br>
  content varchar(255) NOT NULL<br>
)

create table comment(<br>
  commentID varchar(10) PRIMARY KEY,<br>
  commentTime varchar(50) NOT NULL,<br>
  custName varchar(50) NOT NULL,<br>
  custEmail varchar(50),<br>
  custPhone varchar(11),<br>
  content varchar(255) NOT NULL,<br>
  productID varchar(10)<br>
)<br>
alter table comment add foreign key(productID) references product(productID)
