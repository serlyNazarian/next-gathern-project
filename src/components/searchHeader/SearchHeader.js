import React from "react";
import { Button, Form, Select, Space } from "antd";
import styles from "./search.module.css";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const SearchHeader = () => {
  const [form] = Form.useForm();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.outerBorder}>
            <div className={styles.innerBorder}>
              <div className={styles.selects}>
                <Form form={form} name="search" onFinish={onFinish}>
                  <Space size={"large"}>
                    <Select
                      showSearch
                      placeholder="Choose a city"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: "Aleppo",
                          label: "Aleppo",
                        },
                        {
                          value: "Damascus",
                          label: "Damascus",
                        },
                      ]}
                    />
                    <Select
                      defaultValue="All"
                      style={{
                        width: 200,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "All",
                          label: "All",
                        },
                        {
                          value: "Vilas & Apartments",
                          label: "Vilas & Apartments",
                        },
                        {
                          value: "Charlets & Resorts",
                          label: "Charlets & Resorts",
                        },
                        {
                          value: "Farms",
                          label: "Farms",
                        },
                        {
                          value: "Camps",
                          label: "Camps",
                        },
                      ]}
                    />
                    <RangePicker />
                    {/* <Form.Item> */}
                    <Button type="primary" htmlType="submit">
                      Continue
                    </Button>
                    {/* </Form.Item> */}
                  </Space>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
