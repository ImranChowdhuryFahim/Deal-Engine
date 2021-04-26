from twocaptcha import TwoCaptcha

solver = TwoCaptcha('0857952e7bac64fc14b96316013352c2')

result = solver.normal('./captcha')

print(result)