<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ninja Gold</title>
    <style>
        .red{
            color: red;
        }
        .green{
            color: green;
        }
        .activities {
            height: 250px;
            overflow-y: auto;
        }
    </style>
<link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
        <div class=" mt-5 text-center">
            <h1>Welcome to Ninja Gold Game</h1>
            <div class="gold d-flex my-4">
                <p class="mr-2">Your Gold:</p>
                <p class="border px-4"><c:out value="${gold}"/></p>
            </div>
            <div class="boxes d-flex justify-content-between my-4">
                <div class="box border p-4">
                    <h4>Farm</h4>
                    <p>(earn 10-20 golds)</p>
                    <form action="/prosses" method='post' class="form-group">
                        <input type="hidden" name="action" value="farm">
                        <button type="submit" class="btn btn-outline-primary">Find Gold</button>
                    </form>
                </div>
                <div class="box border p-4">
                    <h4>Cave</h4>
                    <p>(earn 5-10 golds)</p>
                    <form action="/prosses" method='post' class="form-group">
                        <input type="hidden" name="action" value="cave">
                        <button type="submit" class="btn btn-outline-primary">Find Gold</button>
                    </form>
                </div>
                <div class="box border p-4">
                    <h4>House</h4>
                    <p>(earn 2-5 golds)</p>
                    <form action="/prosses" method='post' class="form-group">
                        <input type="hidden" name="action" value="house">
                        <button type="submit" class="btn btn-outline-primary">Find Gold</button>
                    </form>
                </div>
                <div class="box border p-4">
                    <h4>Casino</h4>
                    <p>(earn/takes 0-50 golds)</p>
                    <form action="/prosses" method='post' class="form-group">
                        <input type="hidden" name="action" value="casino">
                        <button type="submit" class="btn btn-outline-primary">Find Gold</button>
                    </form>
                </div>
            </div>
            <div class="activities-container">
                <p class="text-left">Activites</p>
                    <div class="activities border p-4">
                        <c:forEach items="${ activities }" var="activity">
                            <p class="text-left"><c:out value="${ activity }"/></p>
                        </c:forEach>
                    </div>
            </div>
            <div  class="d-flex mt-4">
                <form action="/reset" method='post' class="form-group">
                    <button type="submit" class="btn btn-outline-dark">Reset</button>
                </form>
            </div>
        </div>
    </div>

</body>
</html>