<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
   	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Category Page</title>
            <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
        </head>

        <body>
            <div class="container mt-5">
                <a class="btn btn-dark mb-2 float-right" href="/categories">Dashboard</a>
                <h1 class="mt-4">
                    ${category.name}
                </h1>
                
                Products:
				<c:forEach items="${category.products}" var="product">
					<p>- ${product.name}</p>
				</c:forEach>
				
				<h2>
					Add Product
				</h2>
				<form:form action="/categories/${category.id}" method="post">
					<div class="form-group">
						<label>Products:</label>
							<select name="product_id" class="form-control">
						        <c:forEach items="${ products }" var="product">
						        	<option value="${ product.id }">${ product.name }</option>
						        </c:forEach>
						    </select>
					</div>
					<input type="submit" value="Add" class="btn btn-dark mt-4" />
				</form:form>
            </div>

        </body>

        </html>