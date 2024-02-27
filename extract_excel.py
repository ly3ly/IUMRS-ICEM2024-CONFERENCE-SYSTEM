import pandas as pd
import requests


URL_Prefix_QRCode = "https://api.qrserver.com/v1/create-qr-code/?data="
save_path = './qr_imgs/'
def Generate_QRCode(data,filename):
    url = URL_Prefix_QRCode + data
    # 发送GET请求并获取响应
    response = requests.get(url)
    # 检查响应状态码
    if response.status_code == requests.codes.ok:
    # 将响应内容写入本地文件
        with open(save_path + filename + '.png', 'wb') as file:
            file.write(response.content)
        print(filename + "成功")
    else:
        # 输出错误信息
        return filename


# 读取所有工作表
data = pd.read_excel('data.xlsx', sheet_name=None)

data_dict = {}
# 遍历字典，获取每个工作表的数据
dataframe = pd.DataFrame()
for sheet_name, df in data.items():
    dataframe = dataframe._append(df, ignore_index=True)
    

for index, row in dataframe.iterrows():
    row_dict = {}
    for column in dataframe.columns:
        row_dict[column] = row[column]
    data_dict[index] = row_dict



def Generate_QRCode_Task():
    errorList = []
    for index, row_dict in data_dict.items():
        name = row_dict['Title'] + '_' + row_dict['First Name'] + row_dict['Last Name']
        errorList.append(Generate_QRCode(row_dict['ID'],name))
    print(errorList)


def Genrate_SQL():
    pass

"""
CREATE TABLE Speakers (
  [Type] VARCHAR(100),
  [Category] VARCHAR(100),
  [Number] INT,
  [Symposia] VARCHAR(100),
  [ID] VARCHAR(100),
  [Title] VARCHAR(100),
  [First Name] VARCHAR(100),
  [Last Name] VARCHAR(100),
  [Name in Chinese] VARCHAR(100),
  [Official Title] VARCHAR(100),
  [Department] VARCHAR(100),
  [Institution / Company] VARCHAR(100),
  [Email] VARCHAR(100),
  [Registration Fee] VARCHAR(100)
);

INSERT INTO Speakers ([Type], [Category], [Number], [Symposia], [ID], [Title], [First Name], [Last Name], [Name in Chinese], [Official Title], [Department], [Institution / Company], [Email], [Registration Fee])
VALUES ('Plenary Speaker', 'PL', -1, 'A', 'PL-0001A', 'Professor', 'Zhongfan', 'Liu', '劉忠范', 'Professor of Physics Chemistry, Academician', 'College of Chemistry and Molecular Engineering', 'Peking University', 'zfliu@pku.edu.cn', 'waived');
"""