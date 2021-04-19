<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Dojo Page</title>
            <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
        </head>

        <body>
            <div class="container mt-5">
                <a class="btn btn-dark mb-2 float-right" href="/dojos">Dashboard</a>
                <h1>
                    ${dojo.name} ninjas
                </h1>

				<table class="table">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Age</th>
							</tr>
						</thead>
						<tbody>

							<c:forEach items="${dojo.ninjas}" var="ninja">
								<tr>
									<td>
										${ninja.firstName}
									</td>
									<td>
										${ninja.lastName}
									</td>
									<td>
										${ninja.age}
									</td>
								</tr>
							</c:forEach>

						</tbody>
					</table>
            </div>

        </body>

        </html>