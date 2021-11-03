#Tạo database "shop"

#Tạo những bảng sau trong mysql:

create table product(
  productID varchar(10) PRIMARY KEY,
  productName varchar(50) NOT NULL,
  productTypeID varchar(10) NOT NULL,
  salePrice int NOT NULL,
  description varchar(255)
)

create table feedback(
  feedbackID varchar(10) PRIMARY KEY,
  custName varchar(50),
  productName varchar(50) NOT NULL,
  custPhone varchar(11),
  custEmail varchar(50),
  content varchar(255) NOT NULL
)

create table comment(
  commentID varchar(10) PRIMARY KEY,
  commentTime varchar(50) NOT NULL,
  custName varchar(50) NOT NULL,
  custEmail varchar(50),
  custPhone varchar(11),
  content varchar(255) NOT NULL,
  productID varchar(10)
)
alter table comment add foreign key(productID) references product(productID)
