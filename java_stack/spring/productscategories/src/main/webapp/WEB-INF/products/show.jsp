<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Product Page</title>
                <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
            </head>

            <body>
                <div class="container mt-5">
                    <a class="btn btn-dark mb-2 float-right" href="/products">Dashboard</a>
                    <h1 class="mt-4">
                        ${product.name}
                    </h1>
                    <p>Description: ${product.description}</p>
                    <p>Price: ${product.price}</p>

                    Categories:
                    <c:forEach items="${product.categories}" var="category">
                        <p>- ${category.name}</p>
                    </c:forEach>

                    <h2>
                        Add Category
                    </h2>
                    <form:form action="/products/${product.id}" method="post">
                        <div class="form-group">
                            <label>Categories:</label>
                            <select name="category_id" class="form-control">
                                <c:forEach items="${ categories }" var="category">
                                    <option value="${ category.id }">${ category.name }</option>
                                </c:forEach>
                            </select>
                        </div>
                        <input type="submit" value="Add" class="btn btn-dark mt-4" />
                    </form:form>
                </div>

            </body>

            </html>